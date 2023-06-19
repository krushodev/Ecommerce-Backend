import { RoleModel } from "../models/roleModel.js";
import Role from "../../domain/entities/role.js";

class RoleMongooseRepository {
    async find() {
        const rolesDocs = await RoleModel.find();

        if (!rolesDocs > 0) return null;

        return rolesDocs.map((doc) => new Role({
            id: doc._id,
            name: doc.name,
            permissions: doc.permissions,
        }));
    }

    async findOne(id) {
        const roleDoc = await RoleModel.findById(id);

        if (!roleDoc) return null;

        return new Role({
            id: roleDoc._id,
            name: roleDoc.name,
            permissions: roleDoc.permissions,
        });
    }

    async insertOne(role) {
        const newRoleDoc = new RoleModel(role);
        await newRoleDoc.save();

        return true;
    }

    async delete(id) {
        const roleDoc = await RoleModel.findByIdAndDelete(id);

        if (!roleDoc) return null;

        return true;
    }
}

export default RoleMongooseRepository;
