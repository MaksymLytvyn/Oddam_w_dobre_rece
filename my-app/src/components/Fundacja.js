import React, {Component} from 'react';

class HomeOrganization  extends Component{
    render() {
        return(
            <div className='organization' >
                <div>
                    <h3>{this.props.name}</h3>
                    <span className='description'>{this.props.description}</span>
                </div>
                <div>
                    <span>{this.props.additional}</span>
                </div>
            </div>
        )
    }
}

class Fundacja extends Component{
    state={
        data:{
            'organizations':[
                {
                    name:`Organizacja "Lorem Ipsum 1"`,
                    description:"Sed molestie sit amet nisi ac venenatis. Suspendisse potenti.",
                    additional:"Nam laoreet consectetur nunc"
                },
                {
                    name:`Organizacja "Lorem Ipsum 2"`,
                    description:" Vestibulum nec pretium ante. Donec nec massa eu arcu dapibus placerat aliquet id lacus.",
                    additional:"Vestibulum vel leo lacus."
                },
                {
                    name:`Organizacja "Lorem Ipsum 3"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },
                {
                    name:`Organizacja "Lorem Ipsum 4"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },
                {
                    name:`Organizacja "Lorem Ipsum 5"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },
                {
                    name:`Organizacja "Lorem Ipsum 6"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                }
            ],
            'fundations':[
                {
                    name:`Fundacja "Lorem Ipsum 1"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 2"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 3"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 4"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 5"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 6"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 7"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 8"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 9"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },
            ],
            'localCollections':[
                {
                    name:`Zbiórka "Lorem Ipsum 1"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },
                {
                    name:`Zbiórka "Lorem Ipsum 2"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },
                {
                    name:`Zbiórka "Lorem Ipsum 3"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    additional:"Vestibulum vel leo lacus."
                },

            ],
        },

        currentType:"organizations",
        organizationsPage:0,
    };
    changeTypeOfOrganization=(type)=>{
        this.setState({currentType:type,organizationsPage:0});
    };
    changeOrganizationPage=(nr)=>{
        this.setState({organizationsPage:nr})
    };
    createPageButtons=(nr)=>{
        if (nr<2){
            return null;
        }else{
            let buttons=[];
            for (let i=0;i<nr;i++){
                buttons.push(<button key={i} className={(this.state.organizationsPage===i)?"active":"passive"}
                                     onClick={()=>{this.changeOrganizationPage(i)}}>{i+1}</button>)
            }
            return buttons;
        }
    };
    render(){
        const data=this.state.data;
        const type=this.state.currentType;
        const page=this.state.organizationsPage;

        const nrOfBttons=Math.ceil(data[type].length/3);
        let displayedOrganizations=data[type].slice(page*3,(page+1)*3);

        return(
            <>
                <div className='organizations' name='Fundacja' id='fundacja-i-organizacje'>
                    <h2>Komu pomagamy?</h2>
                    <div className="decoration-image"/>
                    <ul className='organization_choice'>
                        <li><button className={(this.state.currentType==='fundations')?"active":"passive"}
                                    onClick={()=>this.changeTypeOfOrganization('fundations')}> Fundacjom</button></li>
                        <li><button className={(this.state.currentType==='organizations')?"active":"passive"}
                                    onClick={()=>this.changeTypeOfOrganization('organizations')}>Organizacjom<br/>pozarządowym</button></li>
                        <li><button className={(this.state.currentType==='localCollections')?"active":"passive"}
                                    onClick={()=>this.changeTypeOfOrganization('localCollections')}>Lokalnym<br/>zbiórkom</button></li>
                    </ul>
                    <p>
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </p>
                    <div className='organizations-details'>
                        {displayedOrganizations.map((e,index)=>(
                                <HomeOrganization key={index} name={e.name} description={e.description} additional={e.additional} border={false}/>
                            )
                        )}
                    </div>
                    <div className='pageButtons'>
                        {this.createPageButtons(nrOfBttons)}
                    </div>
                </div>
            </>
        )
    }
}

export default Fundacja;
