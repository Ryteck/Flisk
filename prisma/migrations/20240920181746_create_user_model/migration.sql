-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "account_name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_account_name_key" ON "users"("account_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
