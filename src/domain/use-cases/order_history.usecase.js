// 📁 src/domain/use-cases/order_history.usecase.js
const OrderHistoryUseCases = (repo) => ({
    archive: async (data) => await repo.archive(data),

    list: async () => await repo.getAll(),

    getByUser: async (userId) => await repo.getByUser(userId),

    getById: async (id) => await repo.getById(id),

    update: async (id, data) => await repo.updateById(id, data),

    delete: async (id) => await repo.deleteById(id),
})

module.exports = OrderHistoryUseCases
