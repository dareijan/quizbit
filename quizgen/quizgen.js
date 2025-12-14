function printForm() {

    try {

        let v_1 = document.forms["quizgenform"]["1_kysymys"].value;
        let v_2 = document.forms["quizgenform"]["1_kysymys_a_vastaus"].value;
        let v_3 = document.forms["quizgenform"]["1_kysymys_b_vastaus"].value;
        let v_4 = document.forms["quizgenform"]["1_kysymys_c_vastaus"].value;
        let v_5 = document.forms["quizgenform"]["1_kysymys_d_vastaus"].value;
        let v_1_0 = document.forms["quizgenform"]["1_kysymys_vastaus"].value.toLowerCase();

        let v_6 = document.forms["quizgenform"]["2_kysymys"].value;
        let v_7 = document.forms["quizgenform"]["2_kysymys_a_vastaus"].value;
        let v_8 = document.forms["quizgenform"]["2_kysymys_b_vastaus"].value;
        let v_9 = document.forms["quizgenform"]["2_kysymys_c_vastaus"].value;
        let v_10 = document.forms["quizgenform"]["2_kysymys_d_vastaus"].value;
        let v_6_0 = document.forms["quizgenform"]["2_kysymys_vastaus"].value.toLowerCase();

        let v_11 = document.forms["quizgenform"]["3_kysymys"].value;
        let v_12 = document.forms["quizgenform"]["3_kysymys_a_vastaus"].value;
        let v_13 = document.forms["quizgenform"]["3_kysymys_b_vastaus"].value;
        let v_14 = document.forms["quizgenform"]["3_kysymys_c_vastaus"].value;
        let v_15 = document.forms["quizgenform"]["3_kysymys_d_vastaus"].value;
        let v_11_0 = document.forms["quizgenform"]["3_kysymys_vastaus"].value.toLowerCase();

        let v_16 = document.forms["quizgenform"]["4_kysymys"].value;
        let v_17 = document.forms["quizgenform"]["4_kysymys_a_vastaus"].value;
        let v_18 = document.forms["quizgenform"]["4_kysymys_b_vastaus"].value;
        let v_19 = document.forms["quizgenform"]["4_kysymys_c_vastaus"].value;
        let v_20 = document.forms["quizgenform"]["4_kysymys_d_vastaus"].value;
        let v_16_0 = document.forms["quizgenform"]["4_kysymys_vastaus"].value.toLowerCase();

        let v_21 = document.forms["quizgenform"]["5_kysymys"].value;
        let v_22 = document.forms["quizgenform"]["5_kysymys_a_vastaus"].value;
        let v_23 = document.forms["quizgenform"]["5_kysymys_b_vastaus"].value;
        let v_24 = document.forms["quizgenform"]["5_kysymys_c_vastaus"].value;
        let v_25 = document.forms["quizgenform"]["5_kysymys_d_vastaus"].value;
        let v_21_0 = document.forms["quizgenform"]["5_kysymys_vastaus"].value.toLowerCase();

        let v_26 = document.forms["quizgenform"]["6_kysymys"].value;
        let v_27 = document.forms["quizgenform"]["6_kysymys_a_vastaus"].value;
        let v_28 = document.forms["quizgenform"]["6_kysymys_b_vastaus"].value;
        let v_29 = document.forms["quizgenform"]["6_kysymys_c_vastaus"].value;
        let v_30 = document.forms["quizgenform"]["6_kysymys_d_vastaus"].value;
        let v_26_0 = document.forms["quizgenform"]["6_kysymys_vastaus"].value.toLowerCase();

        let v_31 = document.forms["quizgenform"]["7_kysymys"].value;
        let v_32 = document.forms["quizgenform"]["7_kysymys_a_vastaus"].value;
        let v_33 = document.forms["quizgenform"]["7_kysymys_b_vastaus"].value;
        let v_34 = document.forms["quizgenform"]["7_kysymys_c_vastaus"].value;
        let v_35 = document.forms["quizgenform"]["7_kysymys_d_vastaus"].value;
        let v_31_0 = document.forms["quizgenform"]["7_kysymys_vastaus"].value.toLowerCase();

        let v_36 = document.forms["quizgenform"]["8_kysymys"].value;
        let v_37 = document.forms["quizgenform"]["8_kysymys_a_vastaus"].value;
        let v_38 = document.forms["quizgenform"]["8_kysymys_b_vastaus"].value;
        let v_39 = document.forms["quizgenform"]["8_kysymys_c_vastaus"].value;
        let v_40 = document.forms["quizgenform"]["8_kysymys_d_vastaus"].value;
        let v_36_0 = document.forms["quizgenform"]["8_kysymys_vastaus"].value.toLowerCase();

        let v_41 = document.forms["quizgenform"]["9_kysymys"].value;
        let v_42 = document.forms["quizgenform"]["9_kysymys_a_vastaus"].value;
        let v_43 = document.forms["quizgenform"]["9_kysymys_b_vastaus"].value;
        let v_44 = document.forms["quizgenform"]["9_kysymys_c_vastaus"].value;
        let v_45 = document.forms["quizgenform"]["9_kysymys_d_vastaus"].value;
        let v_41_0 = document.forms["quizgenform"]["9_kysymys_vastaus"].value.toLowerCase();

        let v_46 = document.forms["quizgenform"]["10_kysymys"].value;
        let v_47 = document.forms["quizgenform"]["10_kysymys_a_vastaus"].value;
        let v_48 = document.forms["quizgenform"]["10_kysymys_b_vastaus"].value;
        let v_49 = document.forms["quizgenform"]["10_kysymys_c_vastaus"].value;
        let v_50 = document.forms["quizgenform"]["10_kysymys_d_vastaus"].value;
        let v_46_0 = document.forms["quizgenform"]["10_kysymys_vastaus"].value.toLowerCase();

        let v_51 = document.forms["quizgenform"]["11_muuttuja"].value;

        let output = 'const ' + v_51 + ' = [{"question": "' + v_1 + '", "answers": { "a": "' + v_2 + '", "b": "' + v_3 + '", "c": "' + v_4 + '", "d": "' + v_5 + '" }, "correctAnswer": "' + v_1_0.toLowerCase() + '"}, {"question": "' + v_6 + '", "answers": { "a": "' + v_7 + '", "b": "' + v_8 + '", "c": "' + v_9 + '", "d": "' + v_10 + '" }, "correctAnswer": "' + v_6_0.toLowerCase()  + '"}, {"question": "' + v_11 + '", "answers": { "a": "' + v_12 + '", "b": "' + v_13 + '", "c": "' + v_14 + '", "d": "' + v_15 + '" }, "correctAnswer": "' + v_11_0.toLowerCase()  + '"}, {"question": "' + v_16 + '", "answers": { "a": "' + v_17 + '", "b": "' + v_18 + '", "c": "' + v_19 + '", "d": "' + v_20 + '" }, "correctAnswer": "' + v_16_0.toLowerCase()  + '"}, {"question": "' + v_21 + '", "answers": { "a": "' + v_22 + '", "b": "' + v_23 + '", "c": "' + v_24 + '", "d": "' + v_25 + '" }, "correctAnswer": "' + v_21_0.toLowerCase()  + '"}, {"question": "' + v_26 + '", "answers": { "a": "' + v_27 + '", "b": "' + v_28 + '", "c": "' + v_29 + '", "d": "' + v_30 + '" }, "correctAnswer": "' + v_26_0.toLowerCase()  + '"}, {"question": "' + v_31 + '", "answers": { "a": "' + v_32 + '", "b": "' + v_33 + '", "c": "' + v_34 + '", "d": "' + v_35 + '" }, "correctAnswer": "' + v_31_0.toLowerCase()  + '"}, {"question": "' + v_36 + '", "answers": { "a": "' + v_37 + '", "b": "' + v_38 + '", "c": "' + v_39 + '", "d": "' + v_40 + '" }, "correctAnswer": "' + v_36_0.toLowerCase()  + '"}, {"question": "' + v_41 + '", "answers": { "a": "' + v_42 + '", "b": "' + v_43 + '", "c": "' + v_44 + '", "d": "' + v_45 + '" }, "correctAnswer": "' + v_41_0.toLowerCase()  + '"}, {"question": "' + v_46 + '", "answers": { "a": "' + v_47 + '", "b": "' + v_48 + '", "c": "' + v_49 + '", "d": "' + v_50 + '" }, "correctAnswer": "' + v_46_0.toLowerCase()  + '"}]';

        const resultsContainer = document.getElementById('tuloste');
        
        resultsContainer.innerHTML = output;

    } catch (error) {
        console.error("Error caught:", error);
    }

    return false; 
    //return printform pitää olla ja return false jotta formin submit ei lataa sivua uudestaan.
}