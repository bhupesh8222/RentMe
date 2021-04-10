import React from 'react'
//import "./styles.css"
export default function Form() {
    return (
     
<div style="position: absolute; left: 35%">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@0;1&display=swap" rel="stylesheet"></link>
        <form>
        <h1>Product Details</h1>
               <p style="position: absolute; top: 75px; left: -120px; font-size: 24px"> Enter Product Name: </p> <input style="position: absolute; top: 105px; left: 140px;" type="text"/>

        <br/>
        <label  style="position: absolute; top: 185px; left: -104px; font-size: 24px" for="category">Choose a Category:</label>
        <select style="position: absolute; top: 185px; left: 140px; width: 200px" name="category" id="category">
            <option value="Electronics">Electronics</option>
            <option value="Mens Wear">Mens Wear</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Furniture">Furniture</option>
            <option value="Books and Stationary">Books and Stationary</option>
            <option value="Others">Others</option>
        </select>
        <br/>
        <input style="position: absolute; top: 255px; left: -80px;" type="file" accept="image/*" />
        <input style="position: absolute; top: 258px; left: 180px; border-radius: 40px; background-color: black; color: white; width: 110px; height: 40px; font-size: 14px" type="submit" value="Upload Image" style="border-radius: 40px; background-color: black; color: white; width: 110px; height: 40px; font-size: 14px;" name="submit"></input>
        <br/>

        <label for="desc" style="position: absolute; top: 380px; left: -54px; font-size: 24px">Description:</label>
        <textarea style="position: absolute; top: 345px; left: 80px; width: 400px; height: 120px" id="desc" name="desc" rows="5" cols="33"></textarea>
        <br/>
        <label style="position: absolute; top: 540px; left: -30px; font-size: 24px" for="fname">Price:</label>
        <input style="position: absolute; top: 545px; border-radius: 0px; height: 40px; left: 40px" type="text" id="fname" name="fname"/><br/>

        <input style="position: absolute; top: 645px; border-radius: 40px; width: 100px;background-color: black; color: white; font-size: 21px" type="submit" value="Submit" name="submit"></input>

      </form>
        </div>
    
)
}