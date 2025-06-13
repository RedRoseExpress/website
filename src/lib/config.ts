export const config: Config = {
	company: {
		name: "Red Rose Express",
		address: "7100 Pacific Cir, Mississauga, ON L5T 2A6",
	},
};

type Config = {
	company: Company;
};

type Company = {
	name: string;
	address: string;
};
