export default function TextInput({
	value,
	disabled,
	onChange,
}: {
	value: string;
	disabled: boolean;
	onChange: (value: string) => void;
}) {
	return (
		<input
			type="text"
			value={value}
			disabled={disabled}
			onChange={(e) => {
				onChange(e.target.value);
			}}
		/>
	);
}
