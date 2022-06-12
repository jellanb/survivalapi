import AddPaymentSuccessFully from "../../domain/usecase/addPaymentSuccessFully";
import StripePaymentRepository from "../../infrastructure/persistence/repositories/sro_dev/StripePaymentRepository";
import UserRepository from "../../infrastructure/persistence/repositories/shard/TB_UsersRepository";
import SilkRepository from "../../infrastructure/persistence/repositories/shard/SilkRepository";


export default async function AddPaymentSuccessFullyController(id: string) {
    await AddPaymentSuccessFully(id, StripePaymentRepository, UserRepository, SilkRepository);
}