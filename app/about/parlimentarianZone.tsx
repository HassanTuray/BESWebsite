import EboardMemberNode from "../components/eboard-member-card";
import { OrgTreeNode } from "../components/org-tree";  
import * as eboard from "../eboardConstants";
  
const presidentLabel = (
    <div className="text-center">
        <div className="text-lg font-semibold">
            <EboardMemberNode 
                photo= {eboard.c_presidentImage}
                name={eboard.c_presidentName} 
                year={eboard.c_presidentYear}  
                position={eboard.c_president}  
                major={eboard.c_presidentMajor}        
            />
        </div>
    </div>
)

const senatorLabel1 = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_senator1Image}
            name={eboard.c_senator1Name} 
            year={eboard.c_senator1Year}  
            position={eboard.c_senator1}  
            major={eboard.c_senator1Major}        
        />
        </div>
    </div>
)

const senatorLabel2 = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_senator2Image}
            name={eboard.c_senator2Name} 
            year={eboard.c_senator2Year}  
            position={eboard.c_senator2}  
            major={eboard.c_senator2Major}        
        />
        </div>
    </div>
)

const parlimentarianLabel = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_parlimentarianImage}
            name={eboard.c_parlimentarianName} 
            year={eboard.c_parlimentarianYear}  
            position={eboard.c_parlimentarian}  
            major={eboard.c_parlimentarianMajor}        
        />
        </div>
    </div>
)

const senatorNode1: OrgTreeNode = {
    label: senatorLabel1,
}

const senatorNode2: OrgTreeNode = {
    label: senatorLabel2,
}

const parlimentarianNode: OrgTreeNode = {
    label: parlimentarianLabel,
}

export const parlimentarianZoneNode: OrgTreeNode = {
    label: presidentLabel,
    children: [senatorNode1, senatorNode2, parlimentarianNode]
}