
class Form {
    constructor(
        public email: string,
        public password: string,
        public password_confirmation: string,
        public phone_number: string,
        public fname: string,
        public lname: string,
        public age: number,
        public birth_month: string,
        public birth_day: number,
        public birth_year: number) {}
    // TODO: You may fill in functions in the class.
    ngOnInit() {
    }
}

var but = document.createElement('button')
but.innerHTML = "Check"
but.onclick = function() {
    var email: string = document.forms["form"]["email"].value
    // TODO: Fill in the rest of the function. Use the Form class defined above
    
   
    var password: string = document.forms["form"]["password"].value
    var password_confirmation: string = document.forms["form"]["password-confirmation"].value
    var phone_number: string = document.forms["form"]["phone-number"].value
    var fname: string = document.forms["form"]["fname"].value
    var lname: string = document.forms["form"]["lname"].value
    var age: number = document.forms["form"]["age"].value
    var birth_month: string = document.forms["form"]["birth-month"].value
    var birth_day: number = document.forms["form"]["birth-day"].value
    var birth_year: number = document.forms["form"]["birth-year"].value
    
    console.log('1: ' + email)
    console.log('2: ' + password)
    console.log('3: '+password_confirmation)
    console.log('4: '+phone_number)
    console.log('5: '+fname)
    console.log('6: '+lname)
    console.log('7: '+age)
    console.log('8: '+birth_month)
    console.log('9: '+birth_day)
    console.log('10: '+birth_year)
    
    var form : Form

    function chkem(em: string): boolean {
        let tmp: string[] = em.split('@')
        if (tmp.length != 2 ) return false
        var id = tmp[0], suf = tmp[1]
        if (id.length < 1  || id.indexOf(' ') != -1 ) return false
        
        if (suf.length < 4 || suf.indexOf('.') == -1 || suf.indexOf('@') != -1 || suf.indexOf(' ') != -1)
            return false
        
        tmp = suf.split('.')
        if(tmp.length != 2) return false
        var pot = tmp[0], dom = tmp[1]
        
        if (pot.length < 1) return false

        if (dom.length < 2 || dom.length > 3) return false
        for (var i = 0; i < dom.length; ++i) {
            var cri = dom[i] 
            if('a'>cri || 'z'<cri)  return false
        }
        
        return true
    }
    
function chkpwd(pwd: string): boolean {
        if (pwd.length < 8) return false;
        var i : number
        var flag_n = false, flag_u = false, flag_l = false;
        for (i=0; i < pwd.length; i++)
        {   var cri = pwd.charAt(i)
            if ('a' <= cri && cri <= 'z') flag_l = true;
            if ('A' <= cri && cri <= 'Z') flag_u = true;
            if ('0' <= cri && cri <= '9') flag_n = true;
        }

        return flag_n && flag_u && flag_l;        
    }

    function chkpwdcon(pwdcon: string, pwd: string): boolean {
        if(pwdcon.length!==pwd.length) return false
        for (var i = 0; i < pwd.length; i++) {
            if (pwdcon.charAt(i) !== pwd.charAt(i))
                return false
        }

        return true
    }
    function chkphn(phn: string): boolean{
        let tmp: string[] = phn.split('-')
        
        if (tmp.length != 3) return false;
        var cri = phn.replace('-', '').replace('-','')
        for (var i = 0; i < cri.length; ++i)
        {
            var cri2 = cri.charAt(i)
            if( cri2 <'0' || cri2 > '9')    return false
        }

        return tmp[0].length == 3 && tmp[1].length == 4 && tmp[2].length ==4
    }
    function chkname(fnm: string): boolean {
        if (fnm.length < 2) return false

        var firstlt = fnm.charAt(0)
        if ('A' > firstlt || 'Z' < firstlt) return false

        for (var i = 1; i < fnm.length; i++) {
            var cri = fnm.charAt(i)
            if (cri < 'a' || cri > 'z')
                return false
        }

        return true
    }

    function chkmonth(month: string): boolean {
        let table: string[] = ['January', 'February','March','April','May','June','July','August','September','October','November','December']
       
        for (var i = 0; i < table.length; ++i) {
            if (table[i] === month) return true;
        }
        return false
    }
    function chkage(age: number): boolean {
        
        return (age) >= 0 && (age)<=200
    }

    function chkdate(date: number): boolean {
        return date >= 0 && date <= 99
    }

    function chkyear(year: number): boolean {
        return year >= 1800 && year <= 2018
    }

    let alertMessage = '';
    // TODO: Fill the alert message according to the validation result by following the form in README.md.
    let errorlist: boolean[] = [chkem(email), chkpwd(password), chkpwdcon(password_confirmation,password),
        chkphn(phone_number), chkname(fname), chkname(lname), chkage(age), chkmonth(birth_month),
        chkdate(birth_day), chkyear(birth_year) ]

    let infolist: string[] = 
        [    'Email',    'Password',    'Password Confirmation',    'Phone number',    'First Name',
    'Last Name', 'Age',      'Month', 'Day',    'Year' ]

    let ttiplist: string[] = ['characters@characters.domain (characters other than @ or whitespace followed by an @ sign, followed by more characters (not \'@\', \'.\', or whitespace: co.kr is not allowed in this case), and then a ".". After the ".", you can only write 2 to 3 letters from a to z).',
        'Must contain at least one number and one uppercase and one lowercase letter, and at least 8 or more characters.',
        'Must match password.',
        'nnn-nnnn-nnnn: three numbers, then "-", followed by four numbers and a "-", then four numbers.',
        'Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets (A-Z, a-z)',
        'Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets (A-Z, a-z)',
        'Must be a number between 0 and 200 (inclusive).',
        'Must be one of "January", "February", ..., "December"',
        'Must be a number of one or two digits.',
        'Must be a number between 1800 and 2018 (inclusive).']
    let listk: string[] = [
        'email-label',
'password-label',
'password-confirmation-label',
'phone-number-label',
'fname-label',
'lname-label',
'age-label',
'birth-month-label',
'birth-day-label',
'birth-year-label'
    ]
    var rst: string = ''
        
    for (var i = 0; i < errorlist.length; ++i) {
        if (!errorlist[i])
            rst+=infolist[i]+'\n'
    }
    let Xlisthtml: any[] =[]
    for (var i = 0; i < errorlist.length; ++i) {
        Xlisthtml.push(document.getElementById(listk[i]))
        //Xlisthtml[i] = document.getElementById('X' + i)
        if (!errorlist[i]) {
            var icon = Xlisthtml[i]
            icon.innerHTML = 'X'
            icon.title=ttiplist[i]
        }
        else 
            Xlisthtml[i].innerHTML = ''
        //console.log(Xlisthtml[i])

    }
    alertMessage = rst === '' ? 'Successfully Submitted!' : 'You must correct:\n\n' + rst;
    alert(alertMessage);
    // Hint: you can use the RegExp class for matching a string with the `test` method.
    // Hint: you can set contents of elements by finding it with `document.getElementById`, and fixing the `innerHTML`.
    // Hint: modify 'title' attribute of each label to display your message
    // Hint: Ask Google to do things you don't know yet! There should be others who have already done what you are to encounter.
}
document.body.appendChild(but)


/*
var but = document.createElement('button')
but.innerHTML = "Check"
but.onclick = function() {
    var email: string = document.forms["form"]["email"].value
    // TODO: Fill in the rest of the*/
