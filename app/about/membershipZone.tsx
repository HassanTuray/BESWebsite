import EboardMemberNode from "../components/eboard-member-card";
import { OrgTreeNode } from "../components/org-tree";  
import * as eboard from "../eboardConstants";

const vicePresidentLabel = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_vicePresidentImage}
            name={eboard.c_vicePresidentName} 
            year={eboard.c_vicePresidentYear}  
            position={eboard.c_vicePresident}  
            major={eboard.c_vicePresidentMajor}        
        />
        </div>
    </div>
)

const membershipChair1Label = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_membershipChair1Image}
            name={eboard.c_membershipChair1Name} 
            year={eboard.c_membershipChair1Year}  
            position={eboard.c_membershipChair1}  
            major={eboard.c_membershipChair1Major}        
        />
        </div>
    </div>
)

const membershipChair2Label = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_membershipChair2Image}
            name={eboard.c_membershipChair2Name} 
            year={eboard.c_membershipChair2Year}  
            position={eboard.c_membershipChair2}  
            major={eboard.c_membershipChair2Major}        
        />
        </div>
    </div>
)

const membershipChair1Node: OrgTreeNode = {
    label: membershipChair1Label,
}
const membershipChair2Node: OrgTreeNode = {
    label: membershipChair2Label,
}

export const membershipZoneNode: OrgTreeNode = {
    label: vicePresidentLabel,
    children: [membershipChair1Node, membershipChair2Node]
}