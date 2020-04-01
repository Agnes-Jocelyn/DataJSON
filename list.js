const DATA ={
    "employees":[
        {"firstName":"John","lastName":"Doe"},
        {"firstName":"Anna","lastName":"Smith"},
        {"firstName":"Peter","lastName":"Jones"},
        {"firstName":"Doni","lastName":"Wong"},
        {"firstName":"Slamet","lastName":"Jordan"},
        {"firstName":"Carlo","lastName":"Wee"},
        {"firstName":"Philips","lastName":"Morris"},
        {"firstName":"Angga","lastName":"Dwi"},
        {"firstName":"Vicky","lastName":"Sasongko"},
        {"firstName":"Nadya","lastName":"Lembayung"},
    ],
    "jobs":[
        {"department":"QC","title":"QA"},
        {"department":"IT","title":['IT Support','Software Engineer','UI/UX','Devops','tester']},
        {"department":"Human Resources Developement","title":"SPV"},
        {"department":"Finance and Accounting","title":"Finance"},
        {"department":"Marketing and Customer Service","title":"Marketing"},
        {"department":"Maintenance and Facility","title":"Maintenance"},
    ],
    "details":[
        {"age":[22,23,24,29,30,32]},
        {"experience":['2 Tahun','3 Tahun','4 Tahun']}
    ]
}
    
    first = DATA.employees[1].firstName;
    last = DATA.employees[1].lastName;
    depart = DATA.jobs[1].department;
    titles = DATA.jobs[1].title[2];
    age = DATA.details[0].age[1];
    exper = DATA.details[1].experience[1];
    console.log(`${first} ${last}, ${age} thn, ${depart} , ${titles}, ${exper}`);

    first = DATA.employees[0].firstName;
    last = DATA.employees[0].lastName;
    depart = DATA.jobs[0].department;
    titles = DATA.jobs[0].title;
    age = DATA.details[0].age[2];
    exper = DATA.details[1].experience[0];
    console.log(`${first} ${last}, ${age} thn, ${depart} , ${titles}, ${exper}`);

    first = DATA.employees[2].firstName;
    last = DATA.employees[2].lastName;
    depart = DATA.jobs[2].department;
    titles = DATA.jobs[2].title;
    age = DATA.details[0].age[2];
    exper = DATA.details[1].experience[2];
    console.log(`${first} ${last}, ${age} thn, ${depart} , ${titles}, ${exper}`);

    first = DATA.employees[3].firstName;
    last = DATA.employees[3].lastName;
    depart = DATA.jobs[3].department;
    titles = DATA.jobs[3].title;
    age = DATA.details[0].age[3];
    exper = DATA.details[1].experience[1];
    console.log(`${first} ${last}, ${age} thn, ${depart} , ${titles}, ${exper}`);
    
    first = DATA.employees[4].firstName;
    last = DATA.employees[4].lastName;
    depart = DATA.jobs[4].department;
    titles = DATA.jobs[4].title;
    age = DATA.details[0].age[4];
    exper = DATA.details[1].experience[2];
    console.log(`${first} ${last}, ${age} thn, ${depart} , ${titles}, ${exper}`);

    first = DATA.employees[5].firstName;
    last = DATA.employees[5].lastName;
    depart = DATA.jobs[5].department;
    titles = DATA.jobs[5].title;
    age = DATA.details[0].age[5];
    exper = DATA.details[1].experience[1];
    console.log(`${first} ${last}, ${age} thn, ${depart} , ${titles}, ${exper}`);
    
    first = DATA.employees[6].firstName;
    last = DATA.employees[6].lastName;
    depart = DATA.jobs[1].department;
    titles = DATA.jobs[2].title;
    age = DATA.details[0].age[1];
    exper = DATA.details[1].experience[1];
    console.log(`${first} ${last}, ${age} thn, ${depart} , ${titles}, ${exper}`);

    first = DATA.employees[7].firstName;
    last = DATA.employees[7].lastName;
    depart = DATA.jobs[1].department;
    titles = DATA.jobs[2].title;
    age = DATA.details[0].age[2];
    exper = DATA.details[1].experience[0];
    console.log(`${first} ${last}, ${age} thn, ${depart} , ${titles}, ${exper}`);
    
    first = DATA.employees[8].firstName;
    last = DATA.employees[8].lastName;
    depart = DATA.jobs[2].department;
    titles = DATA.jobs[4].title;
    age = DATA.details[0].age[0];
    exper = DATA.details[1].experience[2];
    console.log(`${first} ${last}, ${age} thn, ${depart} , ${titles}, ${exper}`);

    first = DATA.employees[9].firstName;
    last = DATA.employees[9].lastName;
    depart = DATA.jobs[3].department;
    titles = DATA.jobs[1].title[0];
    age = DATA.details[0].age[5];
    exper = DATA.details[1].experience[0];
    console.log(`${first} ${last}, ${age} thn, ${depart} , ${titles}, ${exper}`);
    

    


    