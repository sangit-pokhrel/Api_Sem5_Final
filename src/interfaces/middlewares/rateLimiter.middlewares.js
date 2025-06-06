const fs = require("fs");
const path = require("path");

const BLOCKED_IPS_FILE = path.join(__dirname, "../blocked-ips.json");
const MAX_REQUESTS = 10;
const TIME_WINDOW_MS = 60 * 1000;

let requestCounts = {};

// 🧠 Load blocked IPs from file
function loadBlockedIPs() {
  try {
    const file = fs.readFileSync(BLOCKED_IPS_FILE, "utf-8");
    return new Set(JSON.parse(file));
  } catch (e) {
    return new Set();
  }
}

// 💾 Save current blocked IPs to file
function saveBlockedIPs(blockedIPs) {
  fs.writeFileSync(BLOCKED_IPS_FILE, JSON.stringify([...blockedIPs], null, 2));
}

function rateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();

  // 🧠 Always read fresh blocked list
  const blockedIPs = loadBlockedIPs();

  // 🛑 Block request if IP is in list
  if (blockedIPs.has(ip)) {
    return res.status(429).json({
      success: false,
      message: "Too many requests. Your IP has been blocked.",
    });
  }

  // 📊 Init request record for IP
  requestCounts[ip] = requestCounts[ip] || [];
  requestCounts[ip] = requestCounts[ip].filter(
    (ts) => now - ts < TIME_WINDOW_MS
  );
  requestCounts[ip].push(now);

  // ❌ Block IP if limit exceeded
  if (requestCounts[ip].length > MAX_REQUESTS) {
    blockedIPs.add(ip);
    
    saveBlockedIPs(blockedIPs);
    return res.status(429).json({
      success: false,
      message: "Rate limit exceeded. Your IP has been blocked.",
    });
  }

  next();
}

module.exports = rateLimiter;
