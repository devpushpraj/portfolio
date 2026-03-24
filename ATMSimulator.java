import java.util.Scanner;

public class ATMSimulator {
    public static void main(String[] args) {
        // Initial Data (Dummy Bank Database)
        int correctPin = 1234;
        double balance = 50000.0;
        int attempts = 3;
        Scanner sc = new Scanner(System.in);

        System.out.println("--- Welcome to Pushpraj Digital Bank ---");

        // Step 1: Login / PIN Verification
        while (attempts > 0) {
            System.out.print("\nEnter your 4-digit PIN: ");
            int enteredPin = sc.nextInt();

            if (enteredPin == correctPin) {
                System.out.println("✅ Access Granted!");
                break;
            } else {
                attempts--;
                System.out.println("❌ Incorrect PIN. Attempts left: " + attempts);
            }

            if (attempts == 0) {
                System.out.println("🛑 Card Blocked! Please contact your bank.");
                return; // Program yahin khatam
            }
        }

        // Step 2: ATM Menu (Looping)
        boolean exit = false;
        while (!exit) {
            System.out.println("\n---------- MENU ----------");
            System.out.println("1. Check Balance");
            System.out.println("2. Withdraw Cash");
            System.out.println("3. Deposit Money");
            System.out.println("4. Exit");
            System.out.print("Choose an option: ");
            
            int choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.printf("💰 Current Balance: ₹%.2f%n", balance);
                    break;

                case 2:
                    System.out.print("💸 Enter amount to withdraw: ₹");
                    double withdrawAmount = sc.nextDouble();
                    if (withdrawAmount > balance) {
                        System.out.println("⚠️ Insufficient Funds!");
                    } else if (withdrawAmount <= 0) {
                        System.out.println("⚠️ Please enter a valid amount.");
                    } else {
                        balance -= withdrawAmount;
                        System.out.println("✅ Cash Dispersed. Please collect your money.");
                        System.out.printf("Remaining Balance: ₹%.2f%n", balance);
                    }
                    break;

                case 3:
                    System.out.print("📥 Enter deposit amount: ₹");
                    double depositAmount = sc.nextDouble();
                    if (depositAmount > 0) {
                        balance += depositAmount;
                        System.out.println("✅ Money deposited successfully.");
                        System.out.printf("New Balance: ₹%.2f%n", balance);
                    } else {
                        System.out.println("⚠️ Invalid deposit amount.");
                    }
                    break;

                case 4:
                    exit = true;
                    System.out.println("👋 Thank you for using our ATM. Visit again!");
                    break;

                default:
                    System.out.println("⚠️ Invalid selection. Please try again.");
            }
        }
        sc.close();
    }
}