import React, { Component } from 'react';
import Representative from './representative';
import ConfirmPopup from './confirmPopup';
import PrecedencePopup from './precedencePopup';
import TimerPopup from './speechTimerPopup';
import QuestionTimerPopup from './questionTimerPopup';
import Badge from 'react-bootstrap/Badge';
import Footer from './footer';

class Chamber extends Component {
    state = { 
        nameInputDisplay: "block",
        confirmShow: false,
        precedenceShow: false,
        timerShow: false,
        questionTimerShow: false,
        listPeople: [],
        recency: [],
        standingPeople: [],
        speaker: "",
        questioner: "",
        affneg: "Aff",
        affnegbg: "success",
        speechNum: 0,
        questionNum: 0,
        firstSpeech: true,
        fourblock: true,
        billNum: 1,
        disabled: true,
        disabled1: false,
        speakquest: "speaker",
        questions: 0,
    } 

    render() { 
        let rowArray = this.makeArray(this.props.rows);
        let columnArray = this.makeArray(this.props.columns);
        const width = Math.floor((1/this.props.columns) * 100);
        const size = `${width}%`
        const height = `${width * 0.75}%`
        let d = true
        if(this.state.speaker !== ""){
            d = false;
        } else {
            d = true;
        }
        let f = true;
        if(this.state.questioner !== ""){
            f = false;
        } else {
            f = true;
        }
        let head = "";
        if(this.state.speaker === ""){
            head = "The next speaker is ...";
        } else{
            head = `The next speaker is ${this.state.speaker}`;
        }

        let head1 = "";
        if(this.state.questioner === ""){
            head1 = "The next questioner is ...";
        } else{
            head1 = `The next questioner is ${this.state.questioner}`;
        }

        let head2 = "";
        if(this.state.speakquest === "speaker"){
            head2 = "Switch to questioning";
        } else{
            head2 = "Switch to speaking";
        }
        return (
            <div id="chamber">
                <h2 id="header3" style={{display: "none"}}>
                    <button type="button" disabled={this.state.disabled1} onClick={this.handleNextBill} className="btn btn-secondary btn-sm">Next Bill</button>
                    <Badge bg={this.state.affnegbg} className="mt-4 mr-5">Bill: {this.state.billNum}, {this.state.affneg}</Badge>
                    <button type="button" disabled={this.state.disabled1} onClick={this.handleSwitch} className="btn btn-secondary btn-sm ml-2">Switch Side</button>
                </h2>
                <div id="header1" className="card p-3 mb-4 mt-4 text-white" style={{display: "flex"}}>
                    <h1>Enter names of representatives</h1>
                </div>
                <div id="header2" className="card p-3 mb-4 mt-3 text-white" style={{display: "none"}}>
                    <h1>{head}</h1>
                </div>
                <div id="header4" className="card p-3 mb-4 mt-3 text-white" style={{display: "none"}}>
                    <h1>{head1}</h1>
                </div>
                {rowArray.map(num => <div style={{whiteSpace: "nowrap"}} className="container-fluid">{columnArray.map(num => <Representative id={num} btnSize={size} btnHeight={height} nameInputDisplay={this.state.nameInputDisplay} onPersonClick={this.handlePersonClick} color={this.state.color} speakquest={this.state.speakquest}/>)}</div>)}
                <ConfirmPopup show={this.state.confirmShow} onClose={this.handleClose} onYesClick={this.yesHandleClose} onShow={this.handleShow}/>
                <PrecedencePopup show={this.state.precedenceShow} onYesClick={this.yesPrecedenceClose} onClose={this.handlePrecedenceClose} onShow={this.handlePrecedenceShow} people={this.state.listPeople} randomize={this.handleRandomize} disabled={this.state.disabled} onPrecedenceInput={this.handlePrecedenceInput}/>
                <TimerPopup show={this.state.timerShow} onClose={this.handleTimerClose}></TimerPopup>
                <QuestionTimerPopup show={this.state.questionTimerShow} onClose={this.handleQuestionTimerClose}></QuestionTimerPopup>
                <button type="button" id="speakerChoose" disabled={d} style={{display: "none"}} className="btn btn-secondary btn-lg mt-3 mx-auto" onClick={this.handleSpeakerSubmit}>Choose this speaker</button>
                <button type="button" id="questionerChoose" disabled={f} style={{display: "none"}} className="btn btn-secondary btn-lg mt-3 mx-auto" onClick={this.handleQuestionerSubmit}>Choose this questioner</button> <br/>
                <button type="button" id="switchMode" style={{display: "none"}} className="btn btn-secondary btn-sm mx-auto" onClick={this.handleModeSwitch}>{head2}</button>
                <Footer speechesNum={this.state.speechNum} questionsNum={this.state.questionNum}></Footer>
            </div>
        );
    }

    handleModeSwitch = () => {
        document.querySelectorAll('#person').forEach(person => {
            person.dataset.clicked="notClicked";
            person.style.backgroundColor = "#6c757d";
            this.setState({speaker: "", questioner: ""});
        })
        if(this.state.speakquest === "speaker"){
            this.setState({speakquest: "questioner", disabled1: true});
            document.querySelector('#header2').style.animation = 'fadeOut 0.5s 1';
            document.querySelector('#header4').style.animation = 'fadeIn 0.5s 1';
            document.querySelector('#speakerChoose').style.animation = 'fadeOut 0.5s 1';
            document.querySelector('#questionerChoose').style.animation = 'fadeIn 0.5s 1';
            document.querySelector('#header2').addEventListener('animationend', () => {
                document.querySelector('#header2').style.display = 'none';
                document.querySelector('#header4').style.display = 'flex';
                document.querySelector('#speakerChoose').style.display = 'none';
                document.querySelector('#questionerChoose').style.display = 'block';
            }, {once: true});    
        } else{
            this.setState({speakquest: "speaker", disabled1: false});
            document.querySelector('#header2').style.animation = 'fadeIn 0.5s 1';
            document.querySelector('#header4').style.animation = 'fadeOut 0.5s 1';
            document.querySelector('#speakerChoose').style.animation = 'fadeIn 0.5s 1';
            document.querySelector('#questionerChoose').style.animation = 'fadeOut 0.5s 1';
            document.querySelector('#header4').addEventListener('animationend', () => {
                document.querySelector('#header2').style.display = 'flex';
                document.querySelector('#header4').style.display = 'none';
                document.querySelector('#speakerChoose').style.display = 'block';
                document.querySelector('#questionerChoose').style.display = 'none';}, 
            {once: true});
        }
    }

    handleQuestionerSubmit = () => {
        let num = this.state.questions;
        num++;
        this.setState({questions: this.state.questions + 1, questionNum: this.state.questionNum + 1});
        if(this.props.timerShow){
            this.setState({questionTimerShow: true})
        }
        document.querySelectorAll('#person').forEach(person => {
            if(person.innerHTML === this.state.questioner){
                person.dataset.clicked = "notClicked";
                person.style.backgroundColor = "#6c757d";
            }
        });
        let recencyCopy = this.state.recency.filter(person => person !== this.state.questioner);
        recencyCopy.push(this.state.questioner);
        this.props.sendRecency(recencyCopy);
        this.setState({recency: recencyCopy});
        this.handlePersonClick();
        if(num === 4){
            document.querySelectorAll('#person').forEach(person => {
                person.dataset.clicked = "notClicked";
                person.style.backgroundColor = "#6c757d";
            });
            this.setState({questions: 0, speakquest: "speaker", questioner: "", disabled1:false, fourblock: false});
            if(this.state.affneg === "Neg"){
                this.setState({fourblock: true});
            }
            document.querySelector('#header2').style.animation = 'fadeIn 0.5s 1';
                document.querySelector('#header4').style.animation = 'fadeOut 0.5s 1';
                document.querySelector('#speakerChoose').style.animation = 'fadeIn 0.5s 1';
                document.querySelector('#questionerChoose').style.animation = 'fadeOut 0.5s 1';
                document.querySelector('#header4').addEventListener('animationend', () => {
                    document.querySelector('#header2').style.display = 'flex';
                    document.querySelector('#header4').style.display = 'none';
                    document.querySelector('#speakerChoose').style.display = 'block';
                    document.querySelector('#questionerChoose').style.display = 'none';}, 
                {once: true});
            return null;
        }
        if(!this.state.fourblock){
            if(num === 2){
                console.log('running quetions end');
                document.querySelectorAll('#person').forEach(person => {
                        person.dataset.clicked = "notClicked";
                        person.style.backgroundColor = "#6c757d";
                });
                this.setState({questions: 0, speakquest: "speaker", questioner: "", disabled1: false,});
                
                document.querySelector('#header2').style.animation = 'fadeIn 0.5s 1';
                document.querySelector('#header4').style.animation = 'fadeOut 0.5s 1';
                document.querySelector('#speakerChoose').style.animation = 'fadeIn 0.5s 1';
                document.querySelector('#questionerChoose').style.animation = 'fadeOut 0.5s 1';
                document.querySelector('#header4').addEventListener('animationend', () => {
                    document.querySelector('#header2').style.display = 'flex';
                    document.querySelector('#header4').style.display = 'none';
                    document.querySelector('#speakerChoose').style.display = 'block';
                    document.querySelector('#questionerChoose').style.display = 'none';}, 
                {once: true});
            }
        }
    }

    handleSpeakerSubmit = () => {
        document.querySelectorAll('#person').forEach(person => {
            person.dataset.clicked="notClicked";
            person.style.backgroundColor = "#6c757d";
        })
        this.props.sendSpeaker(this.state.speaker, this.state.speechNum + 1, this.state.affneg, this.state.firstSpeech);
        this.setState({speaker: ""});
        if(this.props.timerShow){
            this.setState({timerShow: true})
        }
        if(this.state.affneg === "Aff"){
            this.setState({affneg: "Neg", affnegbg: "danger"});
        } else {
            this.setState({affneg: "Aff", affnegbg: "success"});
        }
        this.setState({speechNum: this.state.speechNum + 1, firstSpeech: false, speakquest: "questioner", disabled1: true});

        document.querySelector('#header2').style.animation = 'fadeOut 0.5s 1';
        document.querySelector('#header4').style.animation = 'fadeIn 0.5s 1';
        document.querySelector('#speakerChoose').style.animation = 'fadeOut 0.5s 1';
        document.querySelector('#questionerChoose').style.animation = 'fadeIn 0.5s 1';
        document.querySelector('#header2').addEventListener('animationend', () => {
            document.querySelector('#header2').style.display = 'none';
            document.querySelector('#header4').style.display = 'flex';
            document.querySelector('#speakerChoose').style.display = 'none';
            document.querySelector('#questionerChoose').style.display = 'block';
        }, {once: true});
        
    }

    handlePrecedenceInput = () => {
        let valid = true;
        let people = this.peopleList();
        document.querySelectorAll('#precedenceInput').forEach((input) => {
            if(!people.includes(input.value)){
                valid = false;
            }
        })
        this.setState({disabled: !valid});
      }
    

    handleNextBill = () => {
        this.setState({affneg: "Aff", affnegbg: "success", firstSpeech: true, billNum: this.state.billNum + 1, fourblock: true});
    }

    handleSwitch = () => {
        if(this.state.affneg === "Aff"){
            this.setState({affneg: "Neg", affnegbg: "danger"});
        } else {
            this.setState({affneg: "Aff", affnegbg: "success"});
        }
    }

    handleRandomize = () => {
        let tmp = [];
        document.querySelectorAll('#person').forEach((person) => {
            if(person.innerText !== ""){
                tmp.push(person.innerText);
            }
        })
        for (let i = tmp.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = tmp[i];
            tmp[i] = tmp[j];
            tmp[j] = temp;
        }
        let e = 0
        document.querySelectorAll('#precedenceInput').forEach((input) => {
            input.value = tmp[e];
            e++;
        })
        document.getElementById('submitPrecedence').disabled = false;
        this.setState({disabled: false});
    }

    handlePersonClick = () => {
        let standing = [];
        document.querySelectorAll('#person').forEach(person => {
            if(person.dataset.clicked === "clicked"){
                standing.push(person.innerText);
            }
        });
        if(standing.length === 0)
        {
            this.setState({speaker: "", questioner: ""});
            return null;
        }
        if(this.state.speakquest === "speaker"){
            

            for(let i = 0; i < this.props.speeches0.length; i++)
            {
                for(let j = 0; j < standing.length; j++){
                    if(this.props.speeches0[i].includes(standing[j])){
                        this.setState({speaker: standing[j]});
                        return null;
                    }
                }
            }

            for(let n = 0; n < this.props.speeches1.length; n++){
                for(let k = 0; k < standing.length; k++){
                    if(this.props.speeches1[n].includes(standing[k])){
                        this.setState({speaker: standing[k]});
                        return null;
                    }
                }
            }

            for(let e = 0; e < this.props.speeches2.length; e++){
                for(let t = 0; t < standing.length; t++){
                    if(this.props.speeches2[e].includes(standing[t])){
                        this.setState({speaker: standing[t]});
                        return null;
                    }
                }
            }

            for(let g = 0; g < this.props.speeches3.length; g++){
                for(let r = 0; r < this.standing.length; r++){
                    if(this.props.speeches3[g].includes(standing[r])){
                        this.setState({speaker: standing[r]});
                        return null;
                    }
                }
            }
        } else {
            for(let i = 0; i < this.state.recency.length; i++){
                for(let j = 0; j < standing.length; j++){
                    if(standing[j] === this.state.recency[i]){
                        this.setState({ questioner: standing[j] });
                        return null;
                    }
                }
            }
        }
    }

    handleShow = () => {
        this.setState({ confirmShow: true });
    };

    handleClose = () => {
        this.setState({ confirmShow: false });
    };

    handlePrecedenceShow = () => {
        this.setState({ precedenceShow: true });
    }

    handlePrecedenceClose = () => {
        this.setState({ precedenceShow: false });
    }

    handleTimerClose = () => {
        this.setState({ timerShow: false });
    }

    handleQuestionTimerClose = () => {
        this.setState({ questionTimerShow: false });
    }
    
    yesHandleClose = () => {
        this.setState({ confirmShow: false });
        document.getElementById('nameSubmit').style.animation = 'fadeOut 0.5s 1';
        document.getElementById('header1').style.animation = 'fadeOut 0.5s 1';
        document.getElementById('header2').style.animation = 'fadeIn 0.5s 1';
        document.getElementById('header3').style.animation = 'fadeIn 0.5s 1';
        document.getElementById('header1').addEventListener('animationend', () => {
            document.getElementById('header1').style.display = 'none';
            document.getElementById('header2').style.display = 'flex';
            document.getElementById('header3').style.display = 'block';
        }, {once: true});
        document.getElementById('speakerChoose').style.animation = 'fadeIn 0.5s 1';
        document.getElementById('switchMode').style.animation = 'fadeIn 0.5s 1';
        document.getElementById('nameSubmit').addEventListener('animationend', () => {
          document.getElementById('nameSubmit').style.display = 'none';
          document.getElementById('speakerChoose').style.display = 'block';
          document.getElementById('switchMode').style.display = 'block';
        }, {once: true});
        document.querySelectorAll('#nameInput').forEach(input => {
          input.parentElement.innerHTML = input.value;
        })
        document.querySelectorAll('#person').forEach((person) => {
            if(person.innerText === ""){
                person.style.animation = 'fadeOut 0.5s 1'
                person.addEventListener('animationend', () => {
                    person.remove();
                })
            }
        })
        this.setState({listPeople: this.peopleList()});
        this.setState({ precedenceShow: true });
    };

    peopleList(){
        let list = [];
        document.querySelectorAll('#person').forEach(person => {
            if(person.innerText != ''){
                list.push(person.innerText);
            }
        })
        return list;
    }

    yesPrecedenceClose = () => {
        this.setState({ precedenceShow: false });
        let tmp = [];
        document.querySelectorAll('#precedenceInput').forEach(input => {
            tmp.push(input.value);
        })
        for(var i = 0; i < tmp.length; i++){
            let div = document.createElement('div');
            div.innerHTML = tmp[i];
        }
        this.props.sendSpeakers(tmp);
        this.props.sendRecency(tmp);
        this.setState({ recency: tmp });
    }

    makeArray(i){
        let array = [];
        for(var j = 0; j < i; j++){
            let push = {j: j};
            array.push(push);
        }
        return array;
    }
}
 
export default Chamber;