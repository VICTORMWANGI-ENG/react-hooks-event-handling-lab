// Code Keypad Component Here

function Keypad() {
    const handleChange = () => {
        console.log('Entering password...');
    }
    return (
        <div>
            <form onChange={handleChange}>
                <input type="password"/>
          </form>

        </div>
    )
}

export default Keypad;