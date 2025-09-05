(function()
 {

"use.strict"

    
angular.module("app",[])
    .controller("ctr", fctr);
fctr.$inject=["$scope"];
    


function fctr($scope){
    $scope.search =function (){
       

        if ( $scope.teamName===""){
         $scope.matches ="";
        }
        else{
             $scope.matches = matches;
            }

        
    };

    $scope.teamName="";
   
    
  

    

     matches=  [     {  team1: "TJF",
                       team2: "TET FRET",
                       date : "20 Juil ",
                       hours: "FM",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "1",
                        phase:"Match 1"
                     
                       },
                    {  team1: "0L. DE LANON",
                       team2: "FC BALL AUX P.",
                       date : "23 Juil ",
                       hours: "FM",
                       class1: "lost",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "1",
                        phase:"Match 1"
                      },
                    {  team1: "T-JEUNE FC",
                       team2: "A. DES JEUNES",
                       date : "22 juil ",
                       hours: "FM",
                       class1: "lost",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "1",
                        phase:"Match 1"
                     
                       },
                    {  team1: "TOUP P. YO",
                       team2: "LIMITE FC",
                       date : "24 Juil ",
                       hours: "FM",
                       class1: "lost",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "1",
                         phase:"Match 1"
                     
                       },
                    {  team1: "MONACO FC",
                       team2: "TET FRET",
                       date : "25 Juil",
                       hours: "FM",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "1",
                         phase:"Match 2"
                     
                       },
                    {  team1: "TJF",
                       team2: "OL. DE LANON",
                       date : "28 Juil ",
                       hours: "FM",
                       class1: "lost",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "1",
                         phase:"Match 2"
                     
                       },
                    {  team1: "T-JEUNE FC",
                       team2: "LAVE LE FC",
                       date : "27 Juil ",
                       hours: "FM",
                       class1: "lost",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "1",
                         phase:"Match 2"
                     
                       },
                
                    {  team1: "A. DES JEUNES",
                       team2: "TOUP P. YO",
                       date : "17 Aout ",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "0",
                         phase:"Match 2"
                     
                       },
                    {  team1: "MONACO FC",
                       team2: "FC BALL AUX P.",
                       date : "30 Juil",
                       hours: "FM",
                       class1: "lost",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "1",
                       phase:"Match 3"
                     
                       },
                    {  team1: "TET FRET ",
                       team2: "OL. DE LANON",
                       date : "01 Aout",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "4",
                       goal2 : "0",
                       phase:"Match 3"
                     
                       },
                    {  team1: "LIMITE FC",
                       team2: "LAVE LÈ FC",
                       date : "31 Juil",
                       hours: "FM",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "1",
                       phase:"Match 3"
                     
                       },
                
                    {  team1: "TOUP POU YO",
                       team2: "T-JEUNES FC",
                       date : "04 Aout",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "2",
                       goal2 : "1",
                        phase:"Match 4"
                     
                       },
                    {  team1: "FC BALLE AUX P.",
                       team2: "TJF",
                       date : "18 Aout",
                       hours: "17h00",
                       class1: "lost",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "1",
                       phase:"Match 3"
                     
                       },
                 
                    {  team1: "OL. DE LANON",
                       team2: "MONACO FC",
                       date : "06 Aout",
                       hours: "FM",
                       class1: "lost",
                       class2: "win",
                       goal1 : "3",
                       goal2 : "4",
                        phase:"Match 4"
                     
                       },
               
                     
                    {  team1: "LIMITE FC",
                       team2: "A. DES JEUNES",
                       date : "05 Aout",
                       hours: "17h",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "1",
                        phase:"Match 4"
                     
                       },
                    {  team1: "TOUP P. YO",
                       team2: "LAVE LE FC",
                       date : "07 Aout",
                       hours: "FM",
                       class1: "lost",
                       class2: "lost",
                       goal1 : "0",
                       goal2 : "0",
                        phase:"Match 4"
                     
                       },
                   {   team1: "TET FRET",
                       team2: "FC BALL AUX P.",
                       date : "08 Aout",
                       hours: "FM",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "1",
                        phase:"Match 5"
                     
                       },
                
              
                
                   {   team1: "TJF",
                       team2: "MONACO FC",
                       date : "11 Aout",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "2",
                       goal2 : "1",
                        phase:"Match 5"
                     
                       },
                   {   team1: "T-JEUNES FC",
                       team2: "LIMITE FC",
                       date : "10 Aout",
                       hours: "FM",
                       class1: "lost",
                       class2: "win",
                       goal1 : "2",
                       goal2 : "4",
                        phase:"Match 5"
                     
                       },
                   {   team1: "LAVE LE FC",
                       team2: "A. DES JEUNES",
                       date : "12 Aout",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "2",
                       goal2 : "0",
                        phase:"Match 5"
                     
                       },
                    
                   
                
                
                  { 
                       no:"20",
                        team1: "TÈT FRÈT",
                        team2: "LIMITE",
                        date : "24 Aout",
                       hours: "Forfait",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "3",
                        phase:"Match 6"
                     
                       },
 { 
                       no:"21",
                       team1: "A. DES JEUNES",
                       team2: "T.J.F",
                       date : "26 Aout",
                       hours: "AP",
                       class1: "win",
                       class2: "lost",
                       goal1 : "0(4)",
                       goal2 : "0(2)",
                        phase:"Match 6"
                     
                       },
                 { 
                        no:"22",
                        team1: "B. AUX PIEDS",
                        team2: "TOUP POU YO",
                        date : "28 Aout",
                       hours: "17h",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "2",
                        phase:"Match 6"
                     
                       },
                 { 
                       no:"23",
                        team1: "LAVE LÈ",
                        team2: "MONACO FC",
                        date : "31 Aout",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "2",
                       goal2 : "0",
                        phase:"Match 6"
                     
                       },
                
                
                 { 
                        no:"24",
                        team1: "LIMITE FC",
                        team2: "A. DES JEUNES",
                        date : "08 Sept",
                        hours: "17h",
                        class1: "win",
                        class2: "win",
                        goal1 : "--",
                        goal2 : "--",
                         phase:"Match 7"
                      
                        },


                 { 
                         no:"25",
                        team1: "TOUP POU YO",
                        team2: "LAVE LÈ FC",
                        date : "09 Sept",
                        hours: "17h",
                        class1: "win",
                        class2: "win",
                        goal1 : "--",
                        goal2 : "--",
                         phase:"Match 7"
                      
                        },


                 { 
                        no:"26",
                        team1: "--",
                        team2: "--",
                        date : "14 Sept",
                        hours: "17h00",
                        class1: "win",
                        class2: "win",
                        goal1 : "--",
                        goal2 : "--",
                         phase:"Match 8"
                                  
                                    }

                   
                   ];
                    

 $scope.matchesGroup = matches;


     $scope.buteurs = [

         { goal: "--",
            name: "--",
            team: "--"},
          { goal: "--",
            name: "--",
            team: "--"},
          { goal: "--",
            name: "--",
            team: "--"},
         
         
         




         
     ];




    
}    



})();
