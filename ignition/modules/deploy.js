const { expect } = require("chai");

const main = async () => {
	const Greeter = await ethers.getContractFactory('Greeter');
	const greeter = await Greeter.deploy('Hello, world! This is the Smart Contract Introduction Course!'); 

	console.log('Greeter Contract Address: ', greeter.target)
};
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});