import './formDemo.styles.scss';
import * as React from "react";

const FormDemo = () => {




    const users = [
        {
            "id": 1,
            "Name": "Maxwell",
            "Data": [
                {

                    "key": "location",
                    "value": "Dadar"
                },
                {
                    "key": "age",
                    "value": "60"
                },
                {
                    "key": "homeTown",
                    "value": "Mumbai"
                },
                {
                    "key": "experience",
                    "value": "13"
                }
            ]
        },
        {
            "id": 2,
            "Name": "Akshay",
            "Data": [
                {
                    
                    "key": "location",
                    "value": "Thane"
                },
                {
                    
                    "key": "age",
                    "value": "25"
                },
                {
                    
                    "key": "homeTown",
                    "value": "Mumbai"
                },
                ,
                {
                    
                    "key": "experience",
                    "value": "12"
                }
            ]
        }

    ];

    const jsonColumns = [
         "location", "age","homeTown","experience"
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
                    {users.map((category) => (
                        <div key={category.id} className="trow">


                            <div className="tcolumn">{category.Name}</div>
                            {category.Data.map((category1) => (
                                <React.Fragment key={category1.key}>
                                    <div className="tcolumn">{category1.value}</div>

                                </React.Fragment>
                            ))}




                        </div>
                    ))}
                </div>
                {users.map((category) => (
                    <div key={category.id}>
                        <div>{category.Name}</div>
                        {category.Data.map((category1) => (
                            <div key={category1.key}>
                                {category1.showHeader ? <div>{category1.key}</div> : ''}
                                <div>{category1.value}</div>

                            </div>
                        ))}

                    </div>
                ))}
            </div>
            <div>


            </div>
        </div>
    )
}

export default FormDemo;