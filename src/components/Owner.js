import React, { Component } from 'react'
import {Media} from 'reactstrap'
import {OWNER} from '../shared/owner'
export class Owner extends Component {
    constructor(props){
        super(props);
        this.state={
            owner:OWNER
        }
    }
    render() {
        const owner=this.state.owner.map((owner)=>{
            return(
              <div key={owner.id} className="owner col-12 mt-3 mb-3">
                <Media tag="li">
                  <Media left middle className="col-3 mt-5 mb-5">
                      <Media object src={owner.image} className="rounded-circle" width="70%" height="30%" alt={owner.name} />
                  </Media>
                  <Media body className="col-8 mt-5">
                    <Media heading>{owner.name}</Media>
                    <p>{owner.description}</p>
                  </Media>
                </Media>
              </div>
            )
        })
        return (
            <div>
                {owner}
            </div>
        )
    }
}

export default Owner
