const request = require('supertest');
const app = require('../app');
const User = require('../infrastructures/database/model/user.models');
const mongoose = require('mongoose');
const { connectDB, disconnectDB } = require('../infrastructures/database/database');

afterAll(
    async () => {
        await disconnectDB();
    }
)
beforeAll(
    async () => {
        await connectDB();
    }
)
//1. describe what are we testing? (Grouping ) -> string and callback function
describe('User Auth Api', () => {
    // 2. test () individual test - what api routes are we testing?

    // test(
    //     "can validate user while creating user", async () => {
    //         //3 Action actual api call
    //         const res = await request(app)
    //             .post("/api/auth/register")
    //             .send(
    //                 {
    //                     fullName: "Sangit Pokhrel",
    //                     email: "admin@gmail.com"
    //                 }
    //             )
    //         // 4. Expectations - Assertion - What should Happen?
    //         expect(res.statusCode).toBe(400)
    //         expect(res.success).toBe(false)
    //         expect(res.message).toBe("Registration failed: Email already exists")


    //     }
    // )

    beforeAll(async () => {
        await User.deleteOne({ email: "admin@gmail.com" })
    })

    test(
        "Adding the user", async () => {
            //3 Action actual api call
            const res = await request(app)
                .post("/api/auth/register")
                .send(
                    {
                        "fullname": "Jest Test",
                        "email": "admin@gmail.com",
                        "password": "jest123",
                        "role": "Admin",
                        "phonenumber": "9868618385",
                        "country": "Nepal",
                        "province": "Bagmati"


                    }
                )
            // 4. Expectations - Assertion - What should Happen?
            expect(res.statusCode).toBe(201)
            expect(res.body.success).toBe(true)
            expect(res.body.message).toBe("User registered successfully")


        }
    )
})