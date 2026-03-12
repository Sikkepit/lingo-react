type TextInputProps = {
	value: string;
	disabled: boolean;
	onChange: (value: string) => void;
};

export default function TextInput({ value, disabled, onChange }: TextInputProps) {
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
