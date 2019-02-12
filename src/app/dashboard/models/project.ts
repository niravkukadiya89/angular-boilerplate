export interface Project {
    _id: number;
    name: string;
    organization: string;
    componentType: string;
    meta: {
        project: {
            projectNumber: number;
            proposalNumber: number;
            orderNumber: number;
            responsEmployee: any;
        },
        projectData: {
            projectStatus: any;
            BAG: any;
            address: {
                street: any;
                number: number;
                postal: number;
                city: string;
                country: string;
            },
            location: {
                type: string;
                geometry: {
                    type: string;
                    coordinates: any;
                },
                properties: {}
            },
            yearOfConstruction: number;
            buildingFunction: any;
            projectType: any;
            serviceContract: any;
            serviceContractCommencementDate: Date;
            serviceContractDuration: any;
            qualityMarksAndCertificates: any;
            warrantyConditions: any;
            explanation: any;
        },
        environmentalCondition: {
            environmentType: any;
            corrosionClass: any;
            windArea: any;
            terrainCategory: any;
        },
        client: {
            name: string;
            location: string;
            address: {
                street: any;
                number: number;
                posta: number;
                city: string;
                country: string;
            },
            website: any;
            email: any;
            phone: number;
            contact: {
                contactPerson: string;
                email: any;
                phone: number;
            },
            explanation: any;
        },
        principality: {
            name: string;
            location: string;
            address: {
                street: any;
                number: number;
                postal: number;
                city: string;
                country: string;
            },
            website: any;
            email: any;
            phone: number;
            contact: {
                contactPerson: string;
                email: any;
                phone: number;
            },
            explanation: any;
        },

        buildingOwner: any;
    };

}
