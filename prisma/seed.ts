import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.kivansag.create({
        data:{
            kivano: "Kovács Patrik",
            tartalom: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ido: new Date()
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Lakatos János",
            tartalom: "Fusce consectetur vulputate auctor.",
            ido: new Date()
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Csíkos Péter",
            tartalom: "Vivamus risus sapien, vestibulum vel nisl vel, ultricies placerat lacus.",
            ido: new Date()
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Lukács Anna",
            tartalom: "Donec tempor blandit aliquam.",
            ido: new Date()
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Nagy Kevin",
            tartalom: "Mauris ultricies, sem quis eleifend posuere, est metus dictum nisl, pellentesque posuere eros libero eget massa.",
            ido: new Date()
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Kiss Beáta",
            tartalom: "Morbi id arcu iaculis, porttitor nisi sit amet, gravida tortor.",
            ido: new Date()
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Közepes Lajos",
            tartalom: "Proin et neque non neque dapibus interdum a in mauris.",
            ido: new Date()
        }
    })
    await prisma.kivansag.create({
        data:{
            tartalom: "Praesent fermentum egestas mi ut accumsan.",
            ido: new Date()
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Gipsz Jakab",
            tartalom: "Praesent iaculis, diam vel euismod venenatis, justo diam efficitur dui, eget scelerisque leo magna quis leo.",
            ido: new Date()
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Vass Elemér",
            tartalom: "Nullam dolor libero, tincidunt eget dignissim nec, imperdiet et libero.",
            ido: new Date()
        }
    })
    await prisma.kivansag.create({
        data:{
            tartalom: "Vestibulum condimentum sed ligula sed faucibus.",
            ido: new Date()
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Cicz Imre",
            tartalom: "Curabitur vitae ex et sapien suscipit maximus sit amet sit amet sapien.",
            ido: new Date()
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Kovács Csanád",
            tartalom: "Aenean elit ex, sollicitudin ut augue a, finibus pellentesque neque.",
            ido: new Date()
        }
    })
    await prisma.kivansag.create({
        data:{
            tartalom: "Maecenas rutrum, elit et bibendum condimentum, libero lorem bibendum ex, non facilisis est diam a dui.",
            ido: new Date()
        }
    })
    await prisma.kivansag.create({
        data:{
            kivano: "Szoboszlay Fruzsina",
            tartalom: "auris eget euismod eros.",
            ido: new Date()
        }
    })
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });