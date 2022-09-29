function InputComponent({ val, handleChange }) {
    return (
        <div style={{ border: '2px dotted black' }}>
            <label>
                <input type="text" value={val} onChange={handleChange} />
            </label>
        </div>
    );
}
export default InputComponent;