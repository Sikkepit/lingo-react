type TextInputProps = {
	value: string;
	disabled: boolean;
	onChange: (value: string) => void;
	onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function TextInput({ value, disabled, onChange, onKeyDown }: TextInputProps) {
	return (
		<input
			className="input"
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
