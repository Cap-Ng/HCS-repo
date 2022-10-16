
    //  alert("height"+window.innerHeight+"px"+ " width"+window.innerWidth+"px")
    function ch_bg(color){
        document.getElementById('ico').style.backgroundColor=color;
    }


    function select_app(string){
        if(string=="All"){
            document.getElementById('portfolio_section_buttonid1').style.backgroundColor="#d97706";
            document.getElementById('portfolio_section_buttonid2').style.backgroundColor="#ffffff";
            document.getElementById('portfolio_section_buttonid3').style.backgroundColor="#ffffff";
            document.getElementById('portfolio_section_buttonid4').style.backgroundColor="#ffffff";

            document.getElementById('portfolio_blockIc').innerHTML=`
            <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" src="Images/portfolio/portfolio-1.jpg" alt="">
            <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" src="Images/portfolio/portfolio-2.jpg" alt="">
            <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" src="Images/portfolio/portfolio-3.jpg" alt="">
            <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" src="Images/portfolio/portfolio-4.jpg" alt="">
            <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" src="Images/portfolio/portfolio-5.jpg" alt="">
            <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" src="Images/portfolio/portfolio-6.jpg" alt="">
            <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" src="Images/portfolio/portfolio-7.jpg" alt="">
            <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" src="Images/portfolio/portfolio-8.jpg" alt="">
            <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" src="Images/portfolio/portfolio-9.jpg" alt="">
        `;
        }
        if(string=="App"){
            document.getElementById('portfolio_section_buttonid1').style.backgroundColor="#ffffff";
            document.getElementById('portfolio_section_buttonid2').style.backgroundColor="#d97706";
            document.getElementById('portfolio_section_buttonid3').style.backgroundColor="#ffffff";
            document.getElementById('portfolio_section_buttonid4').style.backgroundColor="#ffffff";

            document.getElementById('portfolio_blockIc').innerHTML=`
                <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" class="" src="Images/portfolio/portfolio-1.jpg" alt="">
                <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" class="" src="Images/portfolio/portfolio-3.jpg" alt="">
                <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" class="" src="Images/portfolio/portfolio-6.jpg" alt="">
            `;
        }
        if(string=="Card"){
            document.getElementById('portfolio_section_buttonid1').style.backgroundColor="#ffffff";
            document.getElementById('portfolio_section_buttonid2').style.backgroundColor="#ffffff";
            document.getElementById('portfolio_section_buttonid3').style.backgroundColor="#d97706";
            document.getElementById('portfolio_section_buttonid4').style.backgroundColor="#ffffff";

            document.getElementById('portfolio_blockIc').innerHTML=`
                <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" class="" src="Images/portfolio/portfolio-4.jpg" alt="">
                <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" class="" src="Images/portfolio/portfolio-7.jpg" alt="">
                <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" class="" src="Images/portfolio/portfolio-8.jpg" alt="">
            `;
        }
        if(string=="Web"){
            document.getElementById('portfolio_section_buttonid1').style.backgroundColor="#ffffff";
            document.getElementById('portfolio_section_buttonid2').style.backgroundColor="#ffffff";
            document.getElementById('portfolio_section_buttonid3').style.backgroundColor="#ffffff";
            document.getElementById('portfolio_section_buttonid4').style.backgroundColor="#d97706";

            document.getElementById('portfolio_blockIc').innerHTML=`
                <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" class="" src="Images/portfolio/portfolio-2.jpg" alt="">
                <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" class="" src="Images/portfolio/portfolio-5.jpg" alt="">
                <img style="height:300px; margin-top:10px; margin-left:auto; margin-right:auto;" class="" src="Images/portfolio/portfolio-9.jpg" alt="">
            `;
        }
    }
