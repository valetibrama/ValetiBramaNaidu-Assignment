import "../../../node_modules/bootstrap/scss/functions";
import "../../../node_modules/bootstrap/scss/variables";
import "../../../node_modules/bootstrap/scss/mixins";
import "../../../node_modules/bootstrap/scss/utilities";
import "../../../node_modules/bootstrap/scss/transitions";
import "../../../node_modules/bootstrap/scss/_Form.scss";

modal-form-label{
  font-size:1.5rem;
  font-weight:400
  color: $green;
}
modal-form-group {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
}
three-dots {
  position: relative;
  top:-0.7rem;
  padding: 0.15rem;
  background-color: $gray-800;
  font-size: 0;
  margin-left: 20px;
  border-radius: 0.65rem;
}
form-radio{
  display: block;
  color:black;
  width:10px;
  height: 10px;
}
three-dots:hover {
  cursor: pointer;
  background-color: $gray-600;
}
three-dots::before {
  content: "";
  position: absolute;
  top: -0.58rem;
  left: 0;
  background-color: $gray-800;
  border-radius: 0.65rem;
  padding: 0.15rem;
}
three-dots::after {
  content: "";
  position: absolute;
  top: 0.5rem;
  right: 0;
  background-color: $gray-800;
  border-radius: 0.65rem;
  padding: 0.15rem;
}
modal-form-text {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
btn-block {
  display: flex;
  flex-flow: row wrap;
  form-btn {
    display: block;
    width: 20rem;
    padding: 3.5rem 1.5rem 4.5rem 1.5rem;
    border-radius: 1.2rem;
    margin: 0 0 0.5rem 0.5rem;
    border: none;
    background-color: $gray-500;
    color: white;
    &:hover{
      background-color: $primary;
    }
    &:active{
      background-color: $primary;
    }
  }
  active{
    background-color: $primary;
  }
} 