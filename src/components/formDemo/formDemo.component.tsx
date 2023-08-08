import './formDemo.styles.scss';
import * as React from "react";

const FormDemo = () => {
    interface IData {
        key: string,
        value: string
    }

    interface IUsers {
        id: number,
        Name: string,
        Data: Array<IData>
    }

    //const objData: IData[] = ,


    //];


    const users: IUsers[] = [
        {
            id: 1,
            Name: "Maxwell",
            Data: [
                {

                    key: "location",
                    value: "Dadar"
                },
                {
                    key: "age",
                    value: "60"
                },
                {
                    key: "homeTown",
                    value: "Mumbai"
                },
                {
                    key: "experience",
                    value: "13"
                }
            ]
        },
        {
            id: 2,
            Name: "Abhijeet",
            Data: [
                {
                    key: "location",
                    value: "Thane"
                },
                {

                    key: "age",
                    value: "25"
                },
                {

                    key: "homeTown",
                    value: "Mumbai"
                },

                {

                    key: "experience",
                    value: "12"
                }

            ]
        }

    ];

    const jsonColumns: Array<string> = [
        "location", "age", "homeTown", "experience"
    ];

    ;


    return (
        <div>
            <div>
                <div className="div-table">
                    <div className="trow">
                        <div className="tcolumn tcolumn1">USER</div>
                        <React.Fragment>
                            {jsonColumns.map((category1) => (
                                <React.Fragment key={category1}>
                                    <div className="tcolumn tcolumn1">{category1}</div>
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    </div>
                    {users.map((category: IUsers) => (
                        <div key={category.id} className="trow">


                            <div className="tcolumn">{category.Name}</div>
                            {category.Data.map((category1: IData) => (
                                <React.Fragment key={category1.key}>
                                    <div className="tcolumn">{category1.value}</div>

                                </React.Fragment>
                            ))}




                        </div>
                    ))}
                </div>
            </div>
            <div>


            </div>
        </div>
    )
}

export default FormDemo;