import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("look:", formData);
    createRecipe({ ...formData });
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <th>Name</th>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Name"
                  required={true}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <th>Cuisine</th>
                <input
                  type="text"
                  name="cuisine"
                  id="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  placeholder="Cuisine"
                  required={true}
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <th>Photo</th>
                <input
                  type="url"
                  name="photo"
                  id="photo"
                  onChange={handleChange}
                  value={formData.photo}
                  placeholder="Photo"
                  required={true}
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <th>Ingredients</th>
                <textarea
                  type="text"
                  name="ingredients"
                  id="ingredients"
                  rows={3}
                  width="100%"
                  onChange={handleChange}
                  value={formData.ingredients}
                  placeholder="Ingredients"
                  required={true}
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <th>Preparation</th>
                <textarea
                  type="text"
                  name="preparation"
                  id="preparation"
                  rows={3}
                  onChange={handleChange}
                  value={formData.preparation}
                  placeholder="Preparation"
                  required={true}
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
