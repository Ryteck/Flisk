/*
  Warnings:

  - You are about to drop the column `owner_id` on the `groups` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug,user_id]` on the table `groups` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `groups` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "groups" DROP CONSTRAINT "groups_owner_id_fkey";

-- DropIndex
DROP INDEX "groups_slug_owner_id_key";

-- AlterTable
ALTER TABLE "groups" DROP COLUMN "owner_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "projects_slug_group_id_key" ON "projects"("slug", "group_id");

-- CreateIndex
CREATE UNIQUE INDEX "groups_slug_user_id_key" ON "groups"("slug", "user_id");

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
