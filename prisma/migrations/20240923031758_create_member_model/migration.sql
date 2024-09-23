/*
  Warnings:

  - Added the required column `user_id` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "member_type" AS ENUM ('anonymous', 'basic', 'viewer', 'editor');

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "members" (
    "id" TEXT NOT NULL,
    "type" "member_type" NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "user_id" TEXT,
    "group_id" TEXT NOT NULL,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
