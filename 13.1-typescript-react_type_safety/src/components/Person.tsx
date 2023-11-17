interface Props {
	name: string;
	email: string;
	age: number;
	isMarried: boolean;
	friends: string[];
	country?: string;
	sex: Sex;
}
export enum Sex {
	male = "male",
	female = "female",
}

export const Person = (props: Props) => {

	// const [name,setName] =useState<string>("");
	// const getAge = (name:string) : number=>{
	// 	return 99
	// }

	return (
		<div>
			<h1>Name: {props.name}</h1>
			<h1>Email: {props.email}</h1>
			<h1>Age: {props.age}</h1>
			<h1>This person {props.isMarried ? "is" : "is not"} married</h1>
			{props.friends.map((friend) => (
				<h1>{friend}</h1>
			))}
			<h1>Country: {props.country}</h1>
			<h1>Sex: {props.sex}</h1>
		</div>
	);
};

