import EboardMemberNode from "../components/eboard-member-card";
import { OrgTreeNode } from "../components/org-tree";  
import * as eboard from "../eboardConstants";
  
const treasurerLabel = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_treasurerImage}
            name={eboard.c_treasurerName} 
            year={eboard.c_treasurerYear}  
            position={eboard.c_treasurer}  
            major={eboard.c_treasurerMajor}        
        />
        </div>
    </div>
)

const financeChairLabel = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_financeChairImage}
            name={eboard.c_financeChairName} 
            year={eboard.c_financeChairYear}  
            position={eboard.c_financeChair}  
            major={eboard.c_financeChairMajor}        
        />
        </div>
    </div>
)

const conferencePlanningChairLabel1 = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_conferencePlanningChair1Image}
            name={eboard.c_conferencePlanningChair1Name} 
            year={eboard.c_conferencePlanningChair1Year}  
            position={eboard.c_conferencePlanningChair1}  
            major={eboard.c_conferencePlanningChair1Major}        
        />
        </div>
    </div>
)

const conferencePlanningChairLabel2 = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_conferencePlanningChair2Image}
            name={eboard.c_conferencePlanningChair2Name} 
            year={eboard.c_conferencePlanningChair2Year}  
            position={eboard.c_conferencePlanningChair2}  
            major={eboard.c_conferencePlanningChair2Major}        
        />
        </div>
    </div>
)

const financeChairNode: OrgTreeNode = {
    label: financeChairLabel
}

const conferencePlanningChairNode1: OrgTreeNode = {
    label: conferencePlanningChairLabel1
}

const conferencePlanningChairNode2: OrgTreeNode = {
    label: conferencePlanningChairLabel2
}

export const financeZoneNode: OrgTreeNode = {
    label: treasurerLabel,
    children: [financeChairNode, conferencePlanningChairNode1, conferencePlanningChairNode2]
}