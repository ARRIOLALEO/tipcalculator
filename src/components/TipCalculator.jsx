import React from 'react'
import Input from './Imput'
class TipCalculator extends React.Component{
    constructor(){
        super()
        this.state= ({
            billAmount:0,
            service:0.3,
            people:0,
            tip:0
        })
    }

    onChangeBillAmount(e){
        
        let amount = isNaN(e.target.value) ? 0 : e.target.value ;

        this.setState({billAmount:amount})

    }

    onChangeService(e){

        this.setState({service:e.target.value})
    }

    onChangePeople(e){

        this.setState({people:e.target.value})
    }

    calculateTheTip(e){

        e.preventDefault()

        let tip = ((this.state.billAmount * this.state.service) / this.state.people).toFixed(2)

        this.setState({tip})
    }
    render(){
       
        return(
        <>
        <form  onSubmit={(e)=> this.calculateTheTip(e)}>
            <div>
            <p>How much was your bill?</p>

            <Input type="number" step="0.5" min="0" value={this.state.billAmount} onChange={(e)=>this.onChangeBillAmount(e)}/>

            </div>
            <div>
                <select value={this.state.service} onChange={(e)=> this.onChangeService(e)}>
                  
                    <option value="0.3" >30% Great</option>
                    <option value="0.2">20% good</option>
                    <option value="0.15">15% ok</option>
                    <option value="0.1">10% bad</option>

                </select>
            </div>
            <div>
                <p>How many people are sharing the bill?</p>
                <Input type="range" step="1" min="1" value={this.state.people} onChange={(e)=> this.onChangePeople(e)} /><p>{this.state.people}</p>
            </div>
            <button >Calculate</button>
        </form>
        <h2>the tip is {this.state.tip}</h2>
        </>)
    }
}

export default TipCalculator