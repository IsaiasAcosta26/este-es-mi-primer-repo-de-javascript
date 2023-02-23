import PropTypes from "prop-types";

const onChange = (e) => {
  console.log(e.target.value);
};

export function Button({ text, name = " Acosta" }) {
  console.log(text);

  return (
    <>
      <button
        onClick={function () {
          console.log("Esto es un onClink");
        }}
      >
        {text} - {name}
      </button>

      <input onChange={onChange} />
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
