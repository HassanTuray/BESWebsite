import EboardMemberNode from "../components/eboard-member-card";
import { OrgTreeNode } from "../components/org-tree"; 
import * as eboard from "../eboardConstants";

const programsChairLabel = (
    <div className="text-center">
        <div className="text-lg font-semibold">
            <EboardMemberNode 
                photo= {eboard.c_programsChairImage}
                name={eboard.c_programsChairName} 
                year={eboard.c_programsChairYear}  
                position={eboard.c_programsChair}  
                major={eboard.c_programsChairMajor}        
            />
        </div>
    </div>
)

const PCIChairLabel = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_pciChairImage}
            name={eboard.c_pciChairName} 
            year={eboard.c_pciChairYear}  
            position={eboard.c_pciChair}  
            major={eboard.c_pciChairMajor}        
        />
        </div>
    </div>
)

const AcExChairLabel = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_acExChairImage}
            name={eboard.c_acExChairName} 
            year={eboard.c_acExChairYear}  
            position={eboard.c_acExChair}  
            major={eboard.c_acExChairMajor}        
        />
        </div>
    </div>
)

const TORCHChairLabel = (
    <div className="text-center">
        <div className="text-lg font-semibold">
        <EboardMemberNode 
            photo= {eboard.c_torchChairImage}
            name={eboard.c_torchChairName} 
            year={eboard.c_torchChairYear}  
            position={eboard.c_torchChair}  
            major={eboard.c_torchChairMajor}        
        />
        </div>
    </div>
)

const PCIChairNode: OrgTreeNode = {
    label: PCIChairLabel,
}

const AxExChairNode: OrgTreeNode = {
    label: AcExChairLabel,
} 

const TORCHChairNode: OrgTreeNode = {
    label: TORCHChairLabel,
} 

export const programsZoneNode: OrgTreeNode = {
    label: programsChairLabel,
    children: [PCIChairNode, AxExChairNode, TORCHChairNode]
}