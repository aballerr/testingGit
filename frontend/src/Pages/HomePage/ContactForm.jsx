import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput/OutlinedInput';
import Select from '@material-ui/core/Select';
import EmailService from '../../services/email';

// import Button from '@material-ui/core/Button';


const color = '	#48494D';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid lightgray;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;

`

const Form = styled.form`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;

  @media only screen and (max-width: 600px) {
    width: 95z%;
  }
`

const FormGroup = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media only screen and (max-width: 600px) {

    flex-direction: column;

  }
`

const Header = styled.h1`
  color: ${color};
  margin-bottom: 90px;
`

const WidthWrap = styled.span`
width: 49.5%;
@media only screen and (max-width: 600px) {
    width: 100%;
    &:nth-child(2) {
      margin-top: 10px;
    }
  }

`

const Button = styled.button`
  width: 100%;
  padding: 14px 0;
  margin-top: 10px;
  border: none;
  outline: none;
  background-color: #61cbb8;
  color: #4c4c4c;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  &:hover {
    background-color: #9cdfd3;
    transition: background-color 0.25s;
  }
`




class ContactForm extends Component {


  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      budget: '',
      subject: '',
      additionalComments: ''
    }

    this.width = window.innerWidth;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submit = () => {

    // console.log(this.state);
    EmailService.sendEmail(this.state);

    return false;
  }





  test = () => {
    console.log('testing');
  }




  render() {
    // if (this.width <= 600) {
    //   return <MobileContactFrom />
    // }
    // else 

    return (
      <Wrapper>


        <Header>Want to get in contact?</Header>
        <Form>
          <FormGroup>
            <WidthWrap style={{ marginRight: '10px' }}><TextField onChange={this.handleChange('name')} value={this.state.name} variant="outlined" fullWidth={true} label="name" /></WidthWrap>
            <WidthWrap><TextField onChange={this.handleChange('email')} value={this.state.email} variant="outlined" fullWidth={true} label="email" /></WidthWrap>
          </FormGroup>
          <FormGroup>
            <WidthWrap style={{ marginRight: '10px' }}><TextField onChange={this.handleChange('subject')} value={this.state.subject} variant="outlined" fullWidth={true} label="subject" /></WidthWrap>

            <WidthWrap>
              <FormControl fullWidth={true} variant="outlined">
                <InputLabel
                  ref={ref => {
                    this.InputLabelRef = ref;
                  }}
                  htmlFor="outlined-age-native-simple"
                >Budget
                </InputLabel>
                <Select
                  onChange={this.handleChange('budget')}
                  native
                  input={
                    <OutlinedInput
                      labelWidth={100}
                      name="price"
                      id="outlined-age-native-simple"
                    />
                  }


                >
                  <option value="" />
                  <option value="$0-$500">$0-$500</option>
                  <option value="$500-$1000">$500-$1,000</option>
                  <option value="$1000">$1,000+</option>
                </Select>

              </FormControl>
            </WidthWrap>

          </FormGroup>

          <TextField onChange={this.handleChange('additionalComments')} value={this.state.additionalComments} label="Additional Comments" fullWidth={true} variant="outlined" multiline={true} rows={5} />
          <Button type="button" onClick={this.submit}>
            Submit
          </Button>
        </Form>


      </Wrapper>
    );
  }
}

export default ContactForm;
