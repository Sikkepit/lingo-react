type TextInputProps = {
	value: string;
	disabled: boolean;
	isValid?: boolean;

	onChange: (value: string) => void;
	onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function TextInput({ value, disabled, isValid = true, onChange, onKeyDown }: TextInputProps) {
	return (
		<input
			className={`input ${!isValid ? "input--error" : ""}`.trim()}
			type="text"
			value={value}
			disabled={disabled}
			onKeyDown={onKeyDown}
			onChange={(e) => {
				onChange(e.target.value);
			}}
		/>
	);
}
