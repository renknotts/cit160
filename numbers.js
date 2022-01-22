document.querySelector('#copyright').textContent = new Date().getFullYear();

function getTotal() {
	// INPUT
	 let q1 = 0;
	 let p1 = 0; 
     let q2 = 0;
	 let p2 = 0;
     let q3 = 0;
	 let p3 = 0;

     const discount = .10;

     const tax = .075;

     let output = 0;

     q1 = parseInt(document.querySelector('#q1').value);
     p1 = parseInt(document.querySelector('#p1').value);
     q2 = parseInt(document.querySelector('#q2').value);
     p2 = parseInt(document.querySelector('#p2').value);
     q3 = parseInt(document.querySelector('#q3').value);
     p3 = parseInt(document.querySelector('#p3').value);

     const discount = parseInt(document.querySelector('#discount').value);

     const tax = parseInt(document.querySelector('#tax').value);

	// PROCESSING
	 
    output = q1*p1 + q2*p2 + q3*p3 - discount + tax;
	
	//OUTPUT
	 document.querySelector('#output').innerHTML = `$`;
}