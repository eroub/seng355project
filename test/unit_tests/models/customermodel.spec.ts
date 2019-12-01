import "mocha";
let chai = require("chai");
import { CustomerModel } from "../../../src/models/customerModel";

describe ('Testing CustomerModel Functionality:', () => {
    it('Should return the correct specified user: 1', async () => {
        const UM = new CustomerModel();
        const uInfo: any = await UM.userInfo(1);
        chai.expect(uInfo[0].user_id).to.equal(1);
    }).timeout(5000);
    it('Adding a shoe should return true', async () => {
        const UM = new CustomerModel();
        const shoeAdded: boolean = await UM.add_shoe(0, 99, 100);
        chai.expect(shoeAdded).to.equal(true);
    }).timeout(5000);
    it('Removing a shoe should return true', async () => {
        const UM = new CustomerModel();
        const shoeRemoved: boolean = await UM.remove_shoe(99);
        chai.expect(shoeRemoved).to.equal(true);
    }).timeout(5000);
});