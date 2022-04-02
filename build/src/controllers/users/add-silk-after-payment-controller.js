"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSilkAfterPaymentController = void 0;
const add_silk_after_payment_1 = __importDefault(require("../../domain/usecase/add-silk-after-payment"));
const TB_UsersRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/TB_UsersRepository"));
const SilkRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/SilkRepository"));
const addSilkAfterPaymentController = async (username, silkPay) => {
    //TODO: handler error in this section
    return await (0, add_silk_after_payment_1.default)(username, silkPay, TB_UsersRepository_1.default, SilkRepository_1.default);
};
exports.addSilkAfterPaymentController = addSilkAfterPaymentController;
