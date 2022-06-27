function result() 
        {
            var students = 
            {
                190010107001:
                {
                    name: "David", Branch: "Computer-Science", sem: "5TH", DS: "BA", DF: "AA", IC: "AB", PAS: "BB"
                },
                190010107002: {
                    name: "Henaah", Branch: "Computer-Science", sem: "5TH", DS: "BA", DF: "AA", IC: "AB", PAS: "BB",
                },
                190010107003: {
                    name: "Darbie", Branch: "Computer-Science", sem: "5TH", DS: "BA", DF: "AA", IC: "AB", PAS: "BB",
                },
                190010107004: {
                    name: "Kelly", Branch: "Computer-Science", sem: "5TH", DS: "BA", DF: "AA", IC: "AB", PAS: "BB",
                },
                190010107005: {
                    name: "Jake", Branch: "Computer-Science", sem: "5TH", DS: "BA", DF: "AA", IC: "AB", PAS: "BB",
                },
                190010107006: {
                    name: "Bella", Branch: "Computer-Science", sem: "5TH", DS: "BA", DF: "AA", IC: "AB", PAS: "BB",
                },
                190010107007: {
                    name: "Hope", Branch: "Computer-Science", sem: "5TH", DS: "BA", DF: "AA", IC: "AB", PAS: "BB",
                },
                190010107008: {
                    name: "Emma", Branch: "Computer-Science", sem: "5TH", DS: "BA", DF: "AA", IC: "AB", PAS: "BB",
                },
                190010107009: {
                    name: "Micheal", Branch: "Computer-Science", sem: "5TH", DS: "BA", DF: "AA", IC: "AB", PAS: "BB",
                },
                190010107010: {
                    name: "Ena", Branch: "Computer-Science", sem: "5TH", DS: "BA", DF: "AA", IC: "AB", PAS: "BB",
                }

            }

            var enumber=document.getElementById('enumber').value;
            var defination=students[enumber];
            var output=document.getElementById("output");

            if(defination==undefined)
            {
                output.innerHTML=`<hr>There is no information <hr>`; 
            }
            else
            {
                output.innerHTML=`<hr>Name: ${defination.name} <hr> Branch: ${defination.Branch} <hr> SEM: ${defination.sem} <hr>DS: ${defination.DS} <hr>DF: ${defination.DF}  <hr> IC: ${defination.IC} <hr> PAS: ${defination.PAS}`;
            }
        }
