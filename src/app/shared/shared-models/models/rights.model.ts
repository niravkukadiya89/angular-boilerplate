export class RightsModel {
    rights: {
            dataType: string,
            readRights: {
                users: Array<any>,
                organizations: Array<any>
            },
            updateRights: {
                users: Array<any>,
                organizations: Array<any>
            }
        }
    ;
    // rights: [
    //     {
    //         dataType: 'FILE',
    //         readRights: {
    //             users: [],
    //             organizations: []
    //         },
    //         updateRights: {
    //             users: [],
    //             organizations: []
    //         }
    //     }, {
    //         dataType: 'COMMENT_TASK_ISSUE',
    //         readRights: {
    //             users: [],
    //             organizations: []
    //         },
    //         updateRights: {
    //             users: [],
    //             organizations: []
    //         }
    //     }, {
    //         dataType: 'BIM',
    //         readRights: {
    //             users: [],
    //             organizations: []
    //         },
    //         updateRights: {
    //             users: [],
    //             organizations: []
    //         }
    //     }, {
    //         dataType: 'BASIC',
    //         readRights: {
    //             users: [],
    //             organizations: []
    //         },
    //         updateRights: {
    //             users: [],
    //             organizations: []
    //         }
    //     }
    // ];
}
