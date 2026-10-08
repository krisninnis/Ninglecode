# M250 Chapter 2: TicketMachine learning pack (draft)

Status: curriculum captured; interactive UI not yet implemented. This is a reusable teaching specification, not a claim of mastered learning.

## Audience and method
- Teach one question at a time; require prediction before explanation.
- Use rubber-duck explanations, tracing, recall, and deliberate changes to code.
- Reveal a word story (ordinary meaning, term origin where verified, programming meaning) on demand.
- Practice copying a snippet three times with the reference shown; after each correct round hide the reference and reset the input. Fourth round starts with reference hidden. This is practice, not proof of mastery.
- Keep attempts, errors, and delayed recall evidence distinct. Never award completed stages from chat discussion alone.

## Concepts
| Concept | Working definition | Example |
| --- | --- | --- |
| Class | Blueprint defining an object's fields and methods | `TicketMachine` |
| Object | Instance of a class with its own state | `machine` |
| Field | Variable belonging to an object; retains value while object exists | `private int balance;` |
| Parameter | Named input declared by a method, available during the call | `int newBalance` |
| Local variable | Variable declared inside a method or block, with limited scope | `int change = balance - price;` |
| Assignment | Evaluates right-hand expression and stores result in left-hand variable | `balance = newBalance;` |
| Return type | Declares what value a method returns, or `void` for none | `public int getBalance()` |
| Return statement | Sends a value back to the caller | `return balance;` |

Memory analogy: fields and local variables are typically associated with runtime memory. The key Java distinction is scope and lifetime, not a literal C: drive vs RAM split. Objects and their fields can become unreachable and eligible for garbage collection; local variables have method/block scope.

## Question bank (answers stored separately from UI prompts)
1. Given `balance = 100`, `setBalance(int newBalance) { balance = newBalance; }`, and `setBalance(250)`, predict field value: **250**. Learner answered B correctly in conversation.
2. Given `balance = 100`, `setBalance(int newBalance) { newBalance = balance; }`, and `setBalance(250)`, predict field value: **100**. **Pending: do not record an answer.**
3. Predict field and parameter values immediately before and after a call.
4. Identify field vs parameter vs local variable in a method.
5. Predict `getBalance()` return value and distinguish `int` from `void`.
6. Modify a method and predict result before testing in BlueJ.

## Sample teaching code
```java
public class TicketMachine {
    private int balance;

    public void setBalance(int newBalance) {
        balance = newBalance;
    }

    public int getBalance() {
        return balance;
    }
}
```

## Reusable practice schema (planned)
Each task: id, conceptIds, prompt, referenceCode, validation strategy, four-round configuration, explanation, hints, and delayed-recall schedule. Preserve attempts with timestamp, answer, feedback, whether reference was visible, and whether task was independently recalled. Validation must not equate text matching with semantic correctness for arbitrary Java.

## Progress evidence and integrity
Conversation evidence indicates practice on fields, parameters, local variables, assignments and return types. Only the first question above has a verified answer in this captured continuation. Earlier chat answers must be imported with provenance before marking them as recorded. No automatic concept mastery or course completion.

## Next app implementation steps
1. Add a data-driven M250 Chapter 2 lesson route.
2. Build word-story disclosure and single-question prediction component.
3. Implement four-round repetition with reference fading and validation.
4. Persist learner attempts locally with export/import and schema versioning.
5. Add accessibility, tests, and an honest evidence-based progress view.
