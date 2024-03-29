export default function Edit(){
    return (
        <>
        <Navbar/>
    <h1>Address Updater</h1>
    <form action="#" method="post">
        <div class="form-group">
            <label for="street">Street Address:</label>
            <input type="text" id="street" name="street" required/>
        </div>
        <div class="form-group">
            <label for="city">City:</label>
            <input type="text" id="city" name="city" required/>
        </div>
        <div class="form-group">
            <label for="state">State:</label>
            <select id="state" name="state" required>
                <option value="">Select State</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                
            </select>
        </div>
        <div class="form-group">
            <label for="zip">Zip Code:</label>
            <input type="text" id="zip" name="zip" required/>
        </div>
        <input type="submit" value="Submit"/>
    </form>
        </>
    )
}