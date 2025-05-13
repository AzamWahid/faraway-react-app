function Form() {
  return (
    <div className="form-container">
      <select>
        {[...Array(10)].map((_, i) => (
          <option key={i} value={i + 1}>{i + 1}</option>
        ))}
      </select>
      <input type="text" placeholder='What do you need?' />
      <button>Add</button>
    </div>
  );
}

export default Form;
