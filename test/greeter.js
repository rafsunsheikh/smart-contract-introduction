const { expect } = require("chai");

describe('greeter', () => {
	it("should return the new greeting once it's changed", async () => {
		const Greeter = await ethers.getContractFactory('Greeter');
		const greeter = await Greeter.deploy('Hello, world!');

		// await greeter.deployed();
		expect(await greeter.greet()).to.equal('Hello, world!');

		await greeter.setGreeting('Hola, mundo!');
		expect(await greeter.greet()).to.equal('Hola, mundo!');
	});
});