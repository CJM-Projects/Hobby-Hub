package testData;

public class QuizTestData {
    
    private final String question1;
    private final String question2;
    private final String question3;
    private final String question4;
    private final String question5;
    private final String question6;
    private final String question7;
    private final String question8;

    public QuizTestData(
            String question1,
            String question2,
            String question3,
            String question4,
            String question5,
            String question6,
            String question7,
            String question8) {

        this.question1 = question1;
        this.question2 = question2;
        this.question3 = question3;
        this.question4 = question4;
        this.question5 = question5;
        this.question6 = question6;
        this.question7 = question7;
        this.question8 = question8;
    }

    public String getQuestion1() {
        return question1;
    }

    public String getQuestion2() {
        return question2;
    }

    public String getQuestion3() {
        return question3;
    }

    public String getQuestion4() {
        return question4;
    }

    public String getQuestion5() {
        return question5;
    }

    public String getQuestion6() {
        return question6;
    }

    public String getQuestion7() {
        return question7;
    }

    public String getQuestion8() {
        return question8;
    }
}
