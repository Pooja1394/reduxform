import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";

const Input = styled.input`
  width: 250px;
  line-height: 20px;
  border-radius: 15px;
  border: none;
  padding: 10px;
  margin: 10px;
  outline: none;
  color: teal;
  font-size: 15px;
  font-style: italic;
  box-shadow: 0 0px 13px #fff;
  ::placeholder {
    color: teal;
    opacity: .5;
  }
`;
const Radio = styled.input`
  margin: 10px 15px;
  :after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #d1d3d1;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
    box-shadow: 0 0 7px #fff;
  }
  :checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #ffa500;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
    box-shadow: 0 0 7px #fff;
    background-color: teal;
  }
`;
const ParentDiv = styled.div`
  width:80%
  margin: 0 auto 10px auto;
  text-align:left;
`;
const Label = styled.label`
  text-shadow: 0 0 1px;
  font-size: 18px;
`;
const Select = styled.select`
  margin: 10px;
  width: 117px;
  border: none;
  padding: 10px;
  border-radius: 15px;
  background: #fff;
  color: teal;
  font-size: 15px;
  font-style: italic;
  box-shadow: 0 0 13px #fff;
  outline: none;
`;
const Option = styled.option``;

const TextArea = styled.textarea`
  margin: 10px;
  border-radius: 7px;
  outline: none;
  border: none;
  box-shadow: 0 0 7px #fff;
  height: 40px;
  width: 250px;
  color: teal;
  padding: 10px;
  font-size: 14p;
`;
const Button = styled.button`
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background: #fff;
  color: teal;
  font-size: 16px;
  box-shadow: 0 0 7px #fff;
  cursor: pointer;
`;
const fieldComponents = props => {
  const {
    input: { value, onChange, name },
    type,
    placeholder
  } = props;
  console.log("props = ", props);
  if (type === "radio" || type === "checkbox") {
    return (
      <Radio
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    );
  }
  if (type === "textarea") {
    return (
      <TextArea
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    );
  } else {
    return (
      <Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    );
  }
  // return (type==='text'?
  //   <Input type={type} placeholder={placeholder} onChange={onChange} />:
  //   <Radio type={type} placeholder={placeholder} onChange={onChange}/>);
};
const fieldSelect = props => {
  const {
    input: { value, onChange, name },
    type,
    placeholder
  } = props;
  return (
    <Select>
      <Option value="" disabled selected>
        Select
      </Option>
      <Option value="ff0000">Red</Option>
      <Option value="00ff00">Green</Option>
      <Option value="0000ff">Blue</Option>
    </Select>
  );
};
const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  console.log("props = ", props);
  return (
    <form onSubmit={handleSubmit}>
      <ParentDiv>
        <Label>First Name</Label>
        <div>
          <Field
            name="firstName"
            component={fieldComponents}
            type="text"
            placeholder="First Name"
          />
        </div>
      </ParentDiv>
      <ParentDiv>
        <Label>Last Name</Label>
        <div>
          <Field
            name="lastName"
            component={fieldComponents}
            type="text"
            placeholder="Last Name"
          />
        </div>
      </ParentDiv>
      <ParentDiv>
        <Label>Email</Label>
        <div>
          <Field
            name="email"
            component={fieldComponents}
            type="email"
            placeholder="Email"
          />
        </div>
      </ParentDiv>
      <ParentDiv>
        <Label>Sex</Label>
        <div>
          <label>
            <Field
              name="sex"
              component={fieldComponents}
              type="radio"
              value="male"
            />{" "}
            Male
          </label>
          <label>
            <Field
              name="sex"
              component={fieldComponents}
              type="radio"
              value="female"
            />{" "}
            Female
          </label>
        </div>
      </ParentDiv>
      <ParentDiv>
        <Label>Favorite Color</Label>
          <Field name="favoriteColor" component={fieldSelect} />
      </ParentDiv>
      <ParentDiv>
        <Label htmlFor="employed">Employed</Label>
        <Field
          name="employed"
          id="employed"
          component={fieldComponents}
          type="checkbox"
        />
      </ParentDiv>
      <ParentDiv>
        <Label>Notes</Label>
        <div>
          <Field name="notes" component={fieldComponents} type="textarea" />
        </div>
      </ParentDiv>
      <div>
        <Button type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SimpleForm);
