import React from 'react';
import Recommended from '../widgets/Recommended';
import { Container, Row, CardColumns } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../../utils/queries';


const text = {
    color: '#F9F9F9',
    fontWeight: 'bold'
}
const headerStyle = {
    color:'#EF7E56',
    textAlign:'center',
    width:'24rem',
    marginLeft:'25px'
}

const LocationPage = () =>{
    //Query Variable
    const { loading, data } = useQuery(QUERY_POST);
    const comments = data?.post || [];
    console.log(comments);

    // for(let i =0; i<comments.length;i++){
    //     console.log(comments[i].filter(res=>res.category).map(ele=>ele.value));
    // }

    const post = []
    for(let i =0;i<comments.length;i++){
        if(comments[i].category){
            console.log(comments[i].name,comments[i].city, comments[i].post_body)
        }
    }

    
    return (
        <Container>
            <Container>
                <Row className='mb-5'>
                <CardColumns className='col-xl-4 col-lg-10 col-sm-12'>
                        <h1 className='mt-3 bg-light' style={headerStyle}>Activities</h1>
                        <div style={{height: '500px'}} className='overflow-auto'>

                        {!loading ? comments.map((comment)=>(
                            <Recommended id={comment._id} name={comment.name} city={comment.city} post_body={comment.post_body}/>
                            )) : (<div><h3 align='center' style={text}>No Recommendations Yet! </h3></div>)}  

                        </div>
                        
                    </CardColumns>
                    {/* <CardColumns className='col-xl-4 col-lg-10 col-sm-12'>
                        <h1 className='mt-3 bg-light' style={headerStyle}>Food Spots</h1>
                        <div style={{height: '500px'}} className='overflow-auto'>
                            <Recommended/>
                            
                        </div>
                        
                    </CardColumns>
                    <CardColumns className='col-xl-4 col-lg-10 col-sm-12'>
                        <h1 className='mt-3 bg-light' style={headerStyle}>Landmarks</h1>
                        <div style={{height: '500px'}} className='overflow-auto'>
                            <Recommended/>
                            
                        </div>
                        
                    </CardColumns> */}
                </Row>
            </Container>


        </Container>
        

    )

}

export default LocationPage;