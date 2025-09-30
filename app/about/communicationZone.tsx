import EboardMemberNode from "../components/eboard-member-card";
import { OrgTreeNode } from "../components/org-tree";
import * as eboard from "../eboardConstants";

const secretaryLabel = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_secretaryImage}
            name={eboard.c_secretaryName} 
            year={eboard.c_secretaryYear}  
            position={eboard.c_secretary}  
            major={eboard.c_secretaryMajor}        
        />
        </div>
    </div>
)

const techChairLabel1 = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_techChair1Image}
            name={eboard.c_techChair1Name} 
            year={eboard.c_techChair1Year}  
            position={eboard.c_techChair1}  
            major={eboard.c_techChair1Major}        
        />
        </div>
    </div>
)

const techChairLabel2 = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_techChair2Image}
            name={eboard.c_techChair2Name} 
            year={eboard.c_techChair2Year}  
            position={eboard.c_techChair2}  
            major={eboard.c_techChair2Major}        
        />
        </div>
    </div>
)

const historianLabel = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_historianImage}
            name={eboard.c_historianName} 
            year={eboard.c_historianYear}  
            position={eboard.c_historian}  
            major={eboard.c_historianMajor}        
        />
        </div>
    </div>
)

const publicRelationsChairLabel = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_prChairImage}
            name={eboard.c_prChairName} 
            year={eboard.c_prChairYear}  
            position={eboard.c_prChair}  
            major={eboard.c_prChairMajor}        
        />
        </div>
    </div>
)

const techChairNode1: OrgTreeNode = {
    label: techChairLabel1
}

const techChairNode2: OrgTreeNode = {
    label: techChairLabel2
}

const historianNode: OrgTreeNode = {
    label: historianLabel
}

const publicRelationsChairNode: OrgTreeNode = {
    label: publicRelationsChairLabel
}

export const communicationZoneNode: OrgTreeNode = {
    label: secretaryLabel,
    children: [techChairNode1, techChairNode2, historianNode, publicRelationsChairNode]
}