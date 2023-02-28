import { useDispatch } from "react-redux";
import { addItem } from "../../redux/reducer";
import { useState } from "react";

export const CreateTodo = () => {
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (titleValue === "") {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (descriptionValue === "") {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }
    if (titleValue === "" || descriptionValue === "") {
      return;
    }

    dispatch(addItem(titleValue, descriptionValue));
    setTitleValue("");
    setDescriptionValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <div>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={titleValue}
          onChange={(event) => setTitleValue(event.target.value)}
          className={titleError ? "error" : ""}
        />
        {titleError && <div className="error-message">This field is empty</div>}
      </div>
      <div>
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          value={descriptionValue}
          onChange={(event) => setDescriptionValue(event.target.value)}
          className={descriptionError ? "error" : ""}
        />
        {descriptionError && (
          <div className="error-message">This field is empty</div>
        )}
      </div>

      <button type="submit">Create</button>
    </form>
  );
};
